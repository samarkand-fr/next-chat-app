import Conversation from "./Conversation"
import ConversationsList from "./ConversationsList"
import SearchBar from "./SearchBar"

const ChatWrapper = () => {
  return (
    <div className = "absolute w-[320px] h-screen left-0 top-0 bottom-0 bg-[#1F1D1D]">
        <SearchBar/>
        <ConversationsList />
    </div>
  )
}

export default ChatWrapper