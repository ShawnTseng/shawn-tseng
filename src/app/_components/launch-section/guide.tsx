'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Guide() {
    return (
        <div className='absolute bottom-0 w-full flex justify-center items-center'>
            <a href="#career-summary">
                <motion.span className="absolute bottom-10 w-6 h-6"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                        y: [0, 24, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}>
                    <Image src="/down-arrow.svg" fill alt="guide" />
                </motion.span>
                {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-sky-700 flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                        className='w-3 h-3 rounded-full border-sky-700 mb-1'
                    >
                    </motion.div>
                </div> */}
            </a>
        </div>
    )
}