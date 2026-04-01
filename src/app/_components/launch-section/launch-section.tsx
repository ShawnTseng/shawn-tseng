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
                            <span className="text-3xl">I&apos;m </span>
                            <span className="font-poppins-extrabold text-5xl">Shawn</span>
                        </div>
                        <span className="text-xl">
                            10+ years in software engineering
                        </span>
                        <span className="text-xl">
                            Cloud Platform & DevOps (Azure)
                        </span>
                        <span className="text-xl">
                            .NET · React · AI Integration
                        </span>
                        <span className="text-xl mt-4 text-blue-900 font-semibold">
                            📍 Relocating to Melbourne mid-2026
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
