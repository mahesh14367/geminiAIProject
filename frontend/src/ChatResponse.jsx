import React from 'react'
import ReactMarkdown from "react-markdown";

function  ChatResponse({response}) {
    if(!response) return null;

    const {candidates,usageMetadata}=response;

  return (
    <div className="flex w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <div className="w-full">
        <div className="flex w-full">
          <h3 className="text-xl font-bold mb-4">ChatResponse:</h3>
        </div>
        {candidates.map((candidate, index) => (
          <div
            className="w-full prose max-w-none text-gray-700 mt-2"
            key={index}>
            <ReactMarkdown>{candidate.content.parts[0].text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 p-4 bg-gray-100 rounded-lg shadow-md z-50">
        <h2 className="underline">Usage Metadata</h2>
        <ul className="text-sm text-gray-700">
          <li>Prompt Tokens: {usageMetadata.promptTokenCount}</li>
          <li>Response Tokens: {usageMetadata.candidatesTokenCount}</li>
          <li>Total Tokens: {usageMetadata.totalTokenCount}</li>
        </ul>
      </div>
    </div>
  );
}

export default ChatResponse
