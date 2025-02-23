import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chat-input flex gap-2 mt-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 rounded border border-gray-300"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 rounded bg-blue-500 text-white border-none hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
