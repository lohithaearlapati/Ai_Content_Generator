import React, { useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useRef } from 'react';
interface props{
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {
  const editorRef = useRef<Editor>(null);
  useEffect(()=>{
    const editorInstance=editorRef.current?.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const markdownText = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdownText)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Failed to copy text:", err));
    }
  };

  return (
    <div className="bg-white shadow-lg border p-5">
      {/* Title and Copy Button */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Your Result</h2>
        <Button className="flex items-center gap-2" onClick={handleCopy}>
          <Copy size={16} /> Copy
        </Button>
      </div>

      
      <Editor
      ref={editorRef}
        initialValue="hello react editor world!"
        height="500px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
