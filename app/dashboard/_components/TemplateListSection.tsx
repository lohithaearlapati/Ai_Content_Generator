"use client";
import React, { useEffect, useState } from "react";
import Templates from "@/app/(data)/templates";
import TemplateCard from "./TemplateCard";

export interface Template {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: { userSearchInput: string }) {
  const [templateList, setTemplateList] = useState<Template[]>([]);

  useEffect(() => {
    let filteredData = Templates;
    if (userSearchInput) {
      filteredData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
    }
    setTemplateList(filteredData);
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: Template, index: number) => (
        <TemplateCard key={item.slug || index} {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
