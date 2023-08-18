import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppinsMedium = Poppins({
    weight: '500',
    subsets: ['latin']
});

const poppinsBold = Poppins({
    weight: '700',
    subsets: ['latin']
});

export default function Navigation() {
    return (
        <header className="w-full h-20 px-40 py-4 shadow-md gap-[400px] flex items-center">
            <span className='inline-flex items-center gap-4'>
                <Image src="/favicon.ico" className='pb-1' width={33} height={36.59} alt="logo" />
                <span className='flex items-center text-[26px] leading-[39px] gap-[1px] text-[#000000B2]'>
                    <span className={`${poppinsMedium.className} tracking-[-0.015em]`}>
                        SHAWN
                    </span>
                    <span className={`${poppinsBold.className} tracking-[0.02em]`}>
                        TSENG
                    </span>
                </span>
            </span>

            <nav className="p-6 lg:px-8 flex max-w-7xl items-center">
                <div className="flex-1"></div>
                <button className="btn-sky mr-2">Resume</button>
                <button className="btn-sky mr-2">Portfolio</button>
                <button className="btn-sky mr-2">About me</button>
                <button className="btn-sky">Contact me</button>
            </nav>
        </header >
    )
}