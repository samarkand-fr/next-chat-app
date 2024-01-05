import Image from "next/image";

const ConversationsList = () => {
  return (
    <div className="mt-6 px-4">
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#c9d4cc] rounded-[10px]  cursor-pointer mt-[13px]">
        <div className="relative w-16 h-16 ">
          <span className="absolute top-0 right-0 bg-[#31eb65fc] w-[15px] h-[15px] rounded-full z-10 "></span>
          <Image
            src="/images/user.png"
            fill
            className="w-full h-full object-over"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-[#2c2d2c] capitalised text-xs font-semibold">
            George Orwelll
          </span>
          <span className="text-[#767876] block font-semibold text-xs ">
            Good Work
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#c9d4cc] rounded-[10px]  cursor-pointer mt-[13px]">
        <div className="relative w-16 h-16 ">
          <span className="absolute top-0 right-0 bg-[#31eb65fc] w-[15px] h-[15px] rounded-full z-10 "></span>
          <Image
            src="/images/user.png"
            fill
            className="w-full h-full object-over"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-[#2c2d2c] capitalised text-xs font-semibold">
            George Orwelll
          </span>
          <span className="text-[#767876] block font-semibold text-xs ">
            Good Work
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#c9d4cc] rounded-[10px]  cursor-pointer mt-[13px]">
        <div className="relative w-16 h-16 ">
          <span className="absolute top-0 right-0 bg-[#31eb65fc] w-[15px] h-[15px] rounded-full z-10 "></span>
          <Image
            src="/images/user.png"
            fill
            className="w-full h-full object-over"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-[#2c2d2c] capitalised text-xs font-semibold">
            George Orwelll
          </span>
          <span className="text-[#767876] block font-semibold text-xs ">
            Good Work
          </span>
        </div>
      </ul>
      <ul className="flex items-center gap-[15px] px-3 py-2 bg-[#c9d4cc] rounded-[10px]  cursor-pointer mt-[13px]">
        <div className="relative w-16 h-16 ">
          <span className="absolute top-0 right-0 bg-[#31eb65fc] w-[15px] h-[15px] rounded-full z-10 "></span>
          <Image
            src="/images/user.png"
            fill
            className="w-full h-full object-over"
            alt="user image"
          />
        </div>
        <div>
          <span className="text-[#2c2d2c] capitalised text-xs font-semibold">
            George Orwelll
          </span>
          <span className="text-[#767876] block font-semibold text-xs ">
            Good Work
          </span>
        </div>
      </ul>
    </div>
  );
};

export default ConversationsList;
