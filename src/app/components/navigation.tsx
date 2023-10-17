import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
        <header className="relative w-full flex justify-center shadow-lg">
            <div className='max-w-7xl w-full h-20 sm:px-28 sm:py-4 flex items-center'>
                <Link href="/">
                    <span className='w-full sm:w-fit inline-flex items-center justify-center gap-4 cursor-pointer text-[#000000B2]'>
                        <div className='relative w-8 h-8' >
                            <Image src="/logo.svg" fill alt="logo" />
                        </div>
                        <span className='text-2xl'>
                            <span>
                                SHAWN
                            </span>
                            <span className='font-poppins-bold'>
                                TSENG
                            </span>
                        </span>
                    </span>
                </Link>
                <div className='flex-1'></div>
                <nav className="gap-6 inline-flex items-center">
                    <Link href="/experiment">
                        <button className="px-1 py-[6px] h-9 min-w-[59px] text-base text-[#000000B2]">
                            實驗區
                        </button>
                    </Link>
                    {/* TODO:i18n icon */}
                    {/* <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">Resume</button>
                    <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">Portfolio</button>
                    <button className="px-1 py-[6px] h-9 min-w-[59px] text-base">About me</button>
                    <button className="h-12 pt-5 pb-4 flex items-center btn-sky font-poppins-semibold text-[#000000] ">
                        TODO:phone icon
                        Contact me
                    </button> */}
                </nav>
            </div>
        </header >
    )
}