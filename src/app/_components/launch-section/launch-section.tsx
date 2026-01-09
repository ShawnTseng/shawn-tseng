import Image from "next/image";
import Guide from "./guide";

export default function LaunchSection() {
    return (
        <>
            <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center bg-[radial-gradient(70%_79.55%_at_17.54%_55.87%,_rgba(185,_225,_255,_0.2)_0%,_rgba(185,_225,_255,_0.8)_16.84%,_rgba(123,_198,_255,_0.906667)_54.41%,_#49B1FF_100%)]">
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