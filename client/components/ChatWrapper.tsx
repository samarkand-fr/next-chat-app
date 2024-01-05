"use client";
import { useState } from "react";
import ChatBox from "./ChatBox";
import Conversation from "./Conversation";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";

const ChatWrapper = () => {
  // State hook to manage the sidebar visibility
  const [sidebar, setSidebar] = useState<boolean>(false);
   // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="relative">
      <Conversation sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <ChatHeader toggleSidebar={toggleSidebar} />
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default ChatWrapper;
