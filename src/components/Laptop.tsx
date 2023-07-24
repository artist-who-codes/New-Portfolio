import React from 'react';
import Image from 'next/image';
import Blob from '../../public/Vector.svg'
import Icons from './Icons';
import Logo from '../../public/Group 43.svg'
import Project from "./Project"
import ProjectsData from '../data/Projects';
import { ProjectType } from '@/types/Project';

type Props = {}

const Laptop = (props: Props) => {
    return (
        <>
            <div className='bg-[#2d2d2d] px-20 pt-4 pb-2 text-[#E5E5E5] flex justify-between text-lg'>
                <div>
                    <a href="https://github.com/artist-who-codes"><Image alt="Logo" src={Logo} width={50} height={50} className=''></Image></a>
                </div>
                <div className='flex py-2 gap-10'>
                    <button className={` NavShadow`}>About Me</button>
                    <button className={` NavShadow`}>Skills</button>
                    <button className={` NavShadow`}>Projects</button>
                    <button className={` NavShadow`}>Qualifications</button>
                    <button className={` NavShadow`}>Hire Me</button>
                </div>
            </div >
            <div className='flex flex-col gap-24 my-16 mx-32'>
                {/* ---------------------ABOUT ME--------------------- */}
                <section className="flex justify-center gap-14">
                    <section className="text-lg font-medium w-[35rem] my-auto">
                        <p>Hello!</p>
                        <span className="text-5xl"> I am <b>Abirami</b></span>
                        <p className='py-3'>A Front-End Developer,UI/UX Designer, pursuing my Bachelors in Computer Science. I am skilled in popular Full-Stack framework Next.js, React.js and TypeScript. I am also skilled in TailwindCSS. I love to learn and I am dedicated to personal growth.</p>
                        <button className='OuterShadow_wp my-4 rounded-xl'>Check my Projects</button>
                    </section>
                    <section>
                        <Image alt="vector" src={Blob}></Image>
                    </section>
                </section>

                {/* ---------------------SKILLS--------------------- */}
                <section>
                    <h1 className='text-4xl font-bold'>My Technical Skills</h1>
                    <div className='py-16'>
                        <Icons />
                    </div>
                </section>

                {/* ---------------------PROJECTS--------------------- */}
                <div> <h1 className='text-4xl font-bold'>My Projects</h1>
                    <div className="grid grid-cols-2 gap-16 py-16">
                        {ProjectsData.map((project, key) => {
                            return (
                                <div key={key}>
                                    <Project Project={project} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/*---------------------Qualificaton--------------------*/}
                <div>
                    <h1 className='text-4xl font-bold'>My Qualifications</h1>

                </div>
            </div>
        </>
    )
}

export default Laptop