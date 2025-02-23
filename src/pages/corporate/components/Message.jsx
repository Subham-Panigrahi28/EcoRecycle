import React from "react";

const Message = ({ role, content }) => {
  return (
    <div className={`message ${role} p-2 my-2 rounded-md ${role === "user" ? "bg-green-200" : "bg-red-200"}`}>
      {content}
    </div>
  );
};

export default Message;
