"use client";

import React from 'react';

export interface MessageProps {
  content: string;
  isUser: boolean;
}

export default function Message({ content, isUser }: MessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser 
            ? 'bg-osu-orange text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
} 