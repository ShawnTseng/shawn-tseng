import Image from "next/image";

export default function LaunchPage() {
    return (
        <>
            <div className="w-full h-[800px] flex justify-center items-center bg-gradient-to-r from-[#B9E1FF] from-20% via-[#7BC6FF] via-[90.67%] to-[#49B1FF]">
                <div className="max-w-7xl grid grid-cols-2">
                    {/* Brief Intro */}
                    <div className="flex flex-col justify-center items-start ml-14">
                        <span className="text-3xl">Hello</span>
                        <div className="my-4">
                            <span className="text-3xl">I am </span>
                            <span className="font-poppins-extrabold text-5xl">Shawn</span>
                        </div>
                        <span className="text-xl">
                            5+ years of frontend
                        </span>
                        <span className="text-xl">
                            3+ years of full-stack
                        </span>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/portrait.svg" width={506} height={646} alt="portrait" />
                    </div>
                </div>
            </div>
        </>
    )
}