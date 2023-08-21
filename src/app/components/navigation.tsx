import Image from 'next/image';

export default function Navigation() {
    return (
        <header className="w-full shadow-[0_4px_10px_0_#00000033] flex justify-center">
            <div className='max-w-[1440px] w-full h-20 px-[120px] py-4 flex items-center'>
                <span className='inline-flex items-center gap-4'>
                    <Image src="/favicon.ico" className='pb-1 w-8 h-8' width={33} height={36.59} alt="logo" />
                    <span className='flex items-center text-[26px] leading-[39px] gap-[1px]'>
                        <span className={`tracking-[-0.015em]`}>
                            SHAWN
                        </span>
                        <span className={`font-poppins-bold tracking-[0.02em]`}>
                            TSENG
                        </span>
                    </span>
                </span>
                <div className='flex-1'></div>
                <nav className="gap-6 inline-flex items-center">
                    <div className="flex-1"></div>
                    {/* TODO:i18n icon */}
                    <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">Resume</button>
                    <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">Portfolio</button>
                    <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">About me</button>
                    <button className="h-12 pt-5 pb-4 flex items-center btn-sky font-poppins-semibold text-[#000000] ">
                        {/* TODO:phone icon */}
                        Contact me
                    </button>
                </nav>
            </div>
        </header >
    )
}