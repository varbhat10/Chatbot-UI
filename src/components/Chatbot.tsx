"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import Message from './Message';
import type { MessageProps } from './Message';

export default function Chatbot() {
  const [messages, setMessages] = useState<MessageProps[]>([
    { 
      content: "Hi there! I'm the OSU Engineering Assistant with knowledge about anything related to the College of Engineering. How can I help you today?", 
      isUser: false 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Sample responses for demonstration
  const demoResponses = [
    "The College of Engineering at Oregon State University offers degrees in Civil Engineering, Computer Science, Electrical and Computer Engineering, and more.",
    "OSU's College of Engineering was established in 1889 and is one of the oldest engineering programs in the western United States.",
    "To apply to the engineering program at OSU, you'll need to first apply to the university and then apply to the professional program in your engineering discipline.",
    "The engineering program at OSU is accredited by the Accreditation Board for Engineering and Technology (ABET).",
    "Research areas in OSU's College of Engineering include artificial intelligence, robotics, clean energy, advanced manufacturing, and water resources engineering."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { content: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      const botMessage = { content: randomResponse, isUser: false };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-[600px]">
      {/* Chat header */}
      <div className="bg-osu-orange p-4 text-white">
        <h2 className="font-medium">OSU Engineering Chatbot</h2>
      </div>
      
      {/* Message history */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message key={index} content={message.content} isUser={message.isUser} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about OSU Engineering..."
          className="flex-1 py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-osu-orange"
        />
        <button 
          type="submit" 
          className="bg-osu-orange hover:bg-osu-orange/90 text-white p-2 rounded-r-lg"
          disabled={!input.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
} 