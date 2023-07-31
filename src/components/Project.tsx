import { ProjectType } from '@/types/Project'
import React from 'react'
import Completed from "../../public/Completed.svg"
import Ongoing from "../../public/Ongoing.svg"
import Image from 'next/image'

type Props = { Project: ProjectType }

const Project = ({ Project }: Props) => {
    return (
        <div className='OuterShadow rounded-xl flex flex-col gap-3 px-10 pt-10 pb-5'>
            <div className='flex justify-between '>
                <h1 className='text-3xl font-bold'>{Project.name}</h1>
                <p><span className='px-4 py-2.5 text-xs rounded-lg InnerShadow3'>{Project.date}</span></p>
            </div>
            <p>{Project.description}</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Image alt="check" src={Project.status === "Complete" ? Completed : Ongoing} width={37}></Image>
                    <p>{Project.status}</p>
                </div>
                <a className='OuterShadow_btn InnerShadow3 p-[0.7rem] my-4 rounded-[0.5rem]' href={Project.link}>Check This Out!</a>
            </div>
        </div>
    )
}

export default Project