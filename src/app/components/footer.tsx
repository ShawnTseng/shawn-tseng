import Image from 'next/image';

export default function Footer() {
    return (
        <div className="m-4 flex flex-col justify-center items-center">
            <div className='inline-flex items-center'>
                <span className='mr-4'>
                This site is built with
                </span>
                <Image className='mr-4' src="react.svg" width={36} height={36} alt="react" />
                <Image className='mr-4' src="nextjs.svg" width={36} height={36} alt="nextjs" />
                <Image className='mr-4' src="vercel.svg" width={72} height={72} alt="vercel" />
            </div>
            <div>
                Designer: @Ting
            </div>
        </div>
    )
}