import React from 'react'
import JS from "../../public/Skills/JS.svg"
import TS from "../../public/Skills/TS.svg"
import CSS from "../../public/Skills/CSS.svg"
import HTML from "../../public/Skills/HTML.svg"
import Figma from "../../public/Skills/Figma.svg"
import Java from "../../public/Skills/Java.svg"
import Python from "../../public/Skills/Python.svg"
import Next from "../../public/Skills/Next.svg"
import ReactJS from "../../public/Skills/React.svg"
import Git from "../../public/Skills/Git.svg"
import Svelte from "../../public/Skills/Svelte.svg"
import Tailwind from "../../public/Skills/Tailwind.svg"
import MongoDB from "../../public/Skills/MongoDB.svg"
import Image from 'next/image'

type Props = {}

const Icons = (props: Props) => {
    return (
        <div className='sm:text-lg text:md font-semibold grid sm:grid-cols-5 grid-cols-2 sm:gap-14 gap-5'>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={HTML} alt="html" height={80}></Image>
                <div className=''>HTML</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={CSS} alt="html" height={80}></Image>
                <div className=''>CSS</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={JS} alt="html" height={80}></Image>
                <div className=''>JavaScript</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={TS} alt="html" height={80}></Image>
                <div className=''>TypeScript</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Python} alt="html" height={80}></Image>
                <div className=''>Python</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Java} alt="html" height={80}></Image>
                <div className=''>Java</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Figma} alt="html" height={70}></Image>
                <div className=''>Figma</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Git} alt="html" height={80}></Image>
                <div className=''>Git</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Next} alt="html" height={80}></Image>
                <div className=''>NextJs</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={ReactJS} alt="html" height={80}></Image>
                <div className=''>ReactJs</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={MongoDB} alt="html" width={80}></Image>
                <div className='text-center'>MongoDB Atlas</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3 '>
                <Image src={Tailwind} alt="html" height={80}></Image>
                <div className='text-center'>Tailwind CSS</div>
            </div>
            <div className='flex flex-col gap-1 items-center InnerShadow sm:px-[1rem] sm:py-[2rem] px-4 pb-1 pt-3'>
                <Image src={Svelte} alt="html" height={80}></Image>
                <div className=''>Svelte</div>
            </div>
        </div>
    )
}

export default Icons