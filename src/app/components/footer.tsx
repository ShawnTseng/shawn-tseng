'use client';

import moment from 'moment';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
    const age = moment().diff(moment("1992-02-15"), "years");

    return (
        <>
            <div className='max-w-[1440px] w-full h-20 px-[120px] py-4 flex flex-col items-center'>
                <div className='inline-flex items-center gap-4'>
                    <div className='relative w-8 h-8' >
                        <Image src="/favicon.ico" fill alt="logo" />
                    </div>
                    <span className='text-[26px]'>
                        <span className={`tracking-[-0.015em]`}>
                            SHAWN
                        </span>
                        <span className={`font-poppins-bold tracking-[0.02em]`}>
                            TSENG
                        </span>
                    </span>
                </div>
                {/* TODO: */}
                <div className='grid gap-4 grid-cols-4 my-2'>
                    <span>Project</span>
                    <span>Project</span>
                    <span>Project</span>
                    <span>Project</span>
                </div>
                <div className='grid gap-4 grid-cols-3 my-2'>
                    <motion.a href="https://www.linkedin.com/in/%E5%AD%A3%E6%9A%98-%E6%9B%BE-551247166/" target="_blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='relative w-6 h-6'>
                            <Image src="linkedin.svg" fill alt="linkedin" />
                        </div>
                    </motion.a>
                    <motion.a href="https://github.com/ShawnTseng" target="_blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='relative w-6 h-6'>
                            <Image src="github.svg" fill alt="github" />
                        </div>
                    </motion.a>
                    <motion.a href="https://shawntseng.blogspot.com/" target="_blank"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className='relative w-6 h-6'>
                            <Image src="blogger.svg" fill alt="blogger" />
                        </div>
                    </motion.a>
                </div>
                <span className='my-2'>
                    shawntseng40@gmail.com
                </span>
                <div className='h-[1px] w-96 border-[1px] border-[#000000]' />
                <div className='py-8'>
                    © ShawnTSENG 2023
                </div>
                <div>
                    {/* TODO: */}
                    <div className='inline-flex items-center'>
                        <span className='mr-4'>
                            This site is built with
                        </span>
                        <div className='relative w-9 h-9 mr-4'>
                            <Image src="react.svg" fill alt="react" />
                        </div>
                        <div className='relative w-9 h-9 mr-4'>
                            <Image src="nextjs.svg" fill alt="nextjs" />
                        </div>
                        <div className='relative w-[72px] h-[72px] mr-4'>
                            <Image src="vercel.svg" fill alt="vercel" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4">
                        <h1>Personal Info.</h1>
                        <div>Nationality: Taiwan(R.O.C.)</div>
                        <div>Name: Shawn TSENG</div>
                        <div>Gender: Male</div>
                        <div>Age: {age}</div>
                    </div>
                    <div>
                        Designer: @Ting
                    </div>
                </div>
            </div>



        </>
    )
}