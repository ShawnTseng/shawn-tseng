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
            </div>
        </header >
    )
}