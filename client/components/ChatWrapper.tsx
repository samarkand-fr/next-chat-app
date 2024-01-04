'use client'

import ChatBox from "./ChatBox"
import Conversation from "./Conversation"
import Form from "./ChatInput"
import Nav from "./ChatHeader"

const ChatWrapper = () => {

  return (
    <div className="relative">
        <Conversation  />
        <Nav  />
        <ChatBox />
        <Form />
    </div>
  )
}

export default ChatWrapper