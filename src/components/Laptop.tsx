import React from 'react';
import bg from "../../public/background.jpg"
import Image from 'next/image';
import NavBar from "./NavBar"

type Props = {}

const Laptop = (props: Props) => {
    return (
        <div className="bg-[#050b19] ">
            <NavBar />
            <div className="relative -z-10">
                <Image src={bg} alt="coding" className='opacity-75 w-auto h-[60rem] absolute top-0 '></Image>
            </div>
            <div className='bg-blue-900'>
                <div className='p-32'>
                    Hi! I am a
                    <p>Front-End Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Laptop