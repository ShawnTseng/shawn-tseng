import Image from "next/image";

export default function LaunchPage() {
    return (
        <>
            <div className="w-full h-[800px] bg-gradient-to-r from-[#B9E1FF] from-20% via-[#7BC6FF] via-[90.67%] to-[#49B1FF]">
                <h1 className="relative top-[360px] left-[150px] w-fit font-poppins-bold">Hi~ I'm Software Developer</h1>
                <Image src="/portrait.svg" width={506} height={646} alt="portrait"
                    className="relative top-[87px] left-[673.2px]" />
            </div>
        </>
    )
}