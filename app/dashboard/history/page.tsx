"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

export default function HistoryPage() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchHistory() {
            try {
                const data = await db.select().from(AIOutput);
                setHistory(data);
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        }

        fetchHistory();
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied to clipboard!"))
            .catch((err) => console.error("Failed to copy: ", err));
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">History Page</h1>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr className="w-full bg-gray-200 text-left">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">AI Response</th>
                        <th className="p-2 border">Template Slug</th>
                        <th className="p-2 border">Created By</th>
                        <th className="p-2 border">Created At</th>
                        <th className="p-2 border">Copy</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item) => (
                        <tr key={item.id} className="border">
                            <td className="p-2 border">{item.id}</td>
                            <td className="p-2 border" title={item.aiResponse}>
                                {item.aiResponse.length > 100 ? item.aiResponse.substring(0, 100) + "..." : item.aiResponse}
                            </td>
                            <td className="p-2 border">{item.templateSlug}</td>
                            <td className="p-2 border">{item.createdBy}</td>
                            <td className="p-2 border">{item.createdAt}</td>
                            <td className="p-2 border">
                                <button 
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                                    onClick={() => copyToClipboard(item.aiResponse)}
                                >
                                    Copy
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
