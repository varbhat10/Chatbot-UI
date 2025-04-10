"use client";

import React from "react";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50">
      <header className="w-full bg-osu-orange py-4 px-6 mb-8 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center">
          <h1 className="text-white text-2xl font-bold">OSU Engineering Chatbot</h1>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-4xl px-4">
        <Chatbot />
      </main>
      
      <footer className="w-full py-4 px-6 mt-8 bg-gray-100 border-t">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          Powered by OSU LLM ATE
        </div>
      </footer>
    </div>
  );
} 