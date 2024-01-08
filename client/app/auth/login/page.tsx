import Link from "next/link"


const login = () => {
  return (
    <div className="flex">
        <div className="bg-[url('/images/chatting.jpeg')] bg-no-repeat bg-cover h-screen hidden lg:block lg:w-[50%] xl:w-[60%] "></div>
        <div className="flex-1 flex h-screen items-center justify-center px-4">
            <form className="w-[90%]">
                <h1 className="text-xl font-semibold text-white capitalize mb-[20%] ml-[45%] ">LOGIN</h1>
         
                <div className="mt-6">
                    <input type="email" name="email" placeholder="Email..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
                </div>
                <div className="mt-6">
                    <input type="password" name="password" placeholder="Create Password..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
                </div>
                <div className="mt-6">
                    <input type="submit" value="login" className="w-full block cursor-pointer bg-[#31eb65fc] text-black text-lg font-semibold capitalize h-14 px-4 rounded-lg" />
                </div>
                <Link href='/auth/signup' className="inline-block mt-4 text-black font-semibold hover:text-white focus:text-white">Do not have an account?</Link>
            </form>
        </div>
    </div>
  )
}

export default login