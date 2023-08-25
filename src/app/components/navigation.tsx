import Image from 'next/image';

export default function Navigation() {
    return (
        <header className="relative w-full flex justify-center shadow-lg">
            <div className='max-w-7xl w-full h-20 px-28 py-4 flex items-center'>
                <span className='inline-flex items-center gap-4'>
                    <Image src="/favicon.ico" className='w-8 h-8' width={32} height={32} alt="logo" />
                    <span className='text-2xl'>
                        <span>
                            SHAWN
                        </span>
                        <span className='font-poppins-bold'>
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