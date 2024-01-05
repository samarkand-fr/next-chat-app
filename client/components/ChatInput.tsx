import { LuSendHorizonal } from "react-icons/lu";

const ChatInput = () => {
  return (
    <div className="fixed left-0 lg:left-[320px] right-0 bottom-[14px] flex items-center gap-1.5 px-[30px]">
      <input
        type="text"
        name=""
        id=""
        placeholder="Message......."
        className="bg-[#c9d4cc] h-[59px] rounded-[30px] px-6 outline-none flex-1 text-[#2c2d2c] placeholder:text-[#2c2d2c] placeholder:text-xl placeholder:font-semibold"
      />
      <div className="w-[59px] h-[59px] rounded-full bg-[#c9d4cc] flex items-center justify-center cursor-pointer">
        <LuSendHorizonal className="text-[#2c2d2c] text-2xl" />
      </div>
    </div>
  );
};

export default ChatInput;
