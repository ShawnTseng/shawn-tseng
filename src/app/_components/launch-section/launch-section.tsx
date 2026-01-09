import Image from "next/image";
import Guide from "./guide";

export default function LaunchSection() {
    return (
        <>
            {/* TODO:fix gradient problem
                background: radial-gradient(70% 79.55% at 17.54% 55.87%, rgba(185, 225, 255, 0.2) 0%, rgba(185, 225, 255, 0.8) 16.84%, rgba(123, 198, 255, 0.906667) 54.41%, #49B1FF 100%)
            */}
            <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center bg-sky-500">
                <div className="h-full max-w-7xl grid sm:grid-cols-2 gap-4">
                    {/* Brief Intro */}
                    <div className="w-full flex flex-col justify-center items-start">
                        <span className="text-3xl">Hello!</span>
                        <div className="my-4">
                            <span className="text-3xl">I'm </span>
                            <span className="font-poppins-extrabold text-5xl">Shawn</span>
                        </div>
                        <span className="text-xl">
                            5y+ Front-End
                        </span>
                        <span className="text-xl">
                            3y+ Full Stack
                        </span>
                        <span className="text-xl">
                            2y+ DevOps (Azure)
                        </span>
                        <span className="text-xl">
                            1y entrepreneurial experience
                        </span>
                    </div>
                    <div className="hidden sm:flex relative justify-center items-center w-full min-w-[384px]">
                        <Image src="/portrait.svg" fill alt="portrait" />
                    </div>
                </div>
            </div>
            <Guide />
        </>
    )
}