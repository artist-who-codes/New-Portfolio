import React from 'react'
import Image from 'next/image'
import pic from "../../public/profile.png"

type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className='flex py-5 bg-[#050b19] mx-32 relative'>
            <a href='https://github.com/artist-who-codes'><Image alt="open GitHub" src={pic} width={45} height={45} className='rounded-full'></Image></a>
            <div className='absolute right-0 py-2'>
                <a href="/" className='p-10'>Home</a>
                <a href="/Projects" className='p-10'>Projects</a>
                <a href="/Skills" className='p-10'>Skills</a>
                <a href="/Contact" className='p-10'>Hire Me</a>
            </div>
        </div >
    )
}

export default NavBar