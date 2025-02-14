"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation"; 
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/templates";
import { Template } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

function CreateNewContent() {
  const params = useParams(); 
  const templateSlug = params?.["template-slug"]; 

  const [aiOutput,setAiOutput]=useState<string>('');

  const{user}=useUser();

  const selectedTemplate: Template | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );
  const[loading,setLoading]=useState(false);

  const GenerateAIContent =async (formData: any) => {
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
    const result=await chatSession.sendMessage(FinalAIPrompt);
    console.log(result.response.text());
    
    setAiOutput(result?.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
    setLoading(false);

  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    if (!formData) {
        console.error("Error: formData is null or undefined.");
        return;
    }

    try {
        await db.insert(AIOutput).values({
            formdata: JSON.stringify(formData), // ✅ Match schema (lowercase)
            templateSlug: slug,
            aiResponse: aiResp ?? "",
            createdBy: user?.primaryEmailAddress?.emailAddress ?? "Unknown User",
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
    } catch (error) {
        console.error("Error saving data to DB:", error);
    }
    
};


  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {/* Form section */}
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)}
        loading={loading} />

        {/* Output section */}
        <div className="col-span-2">
          <OutputSection  aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
