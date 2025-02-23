import React, { useState, useRef, useEffect } from 'react';
import { SendIcon, BotIcon, UserIcon, XIcon } from 'lucide-react';
import ChatInput from "./ChatInput";
import Message from "./Message";
import { fetchGeminiResponse } from "../services/geminiAPI";

function AiChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { type: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    // Keywords related to recycling/e-waste
    const recycleKeywords = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "bye", "goodbye", "see you", "thanks", "thank you", "exit", "close chat", "hi", "recycle", "e-waste", "dispose", "electronic waste", "laptop", "phone", "battery", "electronic disposal", "waste management"
    ];

    // Check if the message is related to recycling
    const isRecycleQuery = recycleKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isRecycleQuery) {
      try {
        const botResponse = (await fetchGeminiResponse(userMessage)).replace(/\*/g, '');
        setMessages([...newMessages, { type: 'bot', content: botResponse }]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages([...newMessages, { type: 'error', content: "Error fetching response" }]);
      }
    } else {
      setMessages([...newMessages, { type: 'warning', content: "⚠️ I can only assist with e-waste and recycling-related queries." }]);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-label="AI Assistant Chat"
      className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <BotIcon className="h-6 w-6 text-primary" />
          <h3 className="font-semibold text-gray-900">E-Waste Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          aria-label="Close chat"
          className="text-gray-500 hover:text-gray-700"
        >
          <XIcon className="h-5 w-5" />
        </button>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4"
        role="log"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <Message key={index} role={message.type} content={message.content} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0 rounded-full p-2 bg-gray-200">
              <BotIcon className="h-4 w-4 text-gray-600" />
            </div>
            <div className="bg-gray-100 rounded-lg px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about e-waste management..."
            aria-label="Chat message"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AiChat;