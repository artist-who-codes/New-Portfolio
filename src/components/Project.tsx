import { ProjectType } from '@/types/Project'
import React from 'react'
import Completed from "../../public/Completed.svg"
import Ongoing from "../../public/Ongoing.svg"
import Image from 'next/image'

type Props = { Project: ProjectType }

const Project = ({ Project }: Props) => {
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <>{width > 640 ?
            < div className='OuterShadow rounded-xl flex flex-col gap-3 sm:px-10 sm:pt-10 sm:pb-5 p-5' >
                <div className='sm:flex sm:justify-between'>
                    <h1 className='sm:text-3xl font-bold text-2xl'>{Project.name}</h1>
                    <p><span className='sm:px-4 sm:py-2.5 text-xs sm:rounded-lg InnerShadow3 rounded-md p-2 my-2'>{Project.date}</span></p>
                </div>
                <p className=''>{Project.description}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <Image alt="check" src={Project.status === "Complete" ? Completed : Ongoing} width={37}></Image>
                        <p>{Project.status}</p>
                    </div>
                    <a className='OuterShadow_btn InnerShadow3 p-[0.7rem] my-4 rounded-[0.5rem]' href={Project.link}>Check This Out!</a>
                </div>
            </div >
            :
            < div className='OuterShadow rounded-xl flex flex-col gap-3 sm:px-10 sm:pt-10 sm:pb-5 px-5 pt-5 pb-7' >
                <div className='space-y-2'>
                    <h1 className='sm:text-3xl font-bold text-2xl'>{Project.name}</h1>
                    <p><span className='sm:px-4 sm:py-2.5 text-xs sm:rounded-lg InnerShadow3 rounded-md p-2 my-2'>{Project.date}</span></p>
                </div>
                <p className=''>{Project.description}</p>
                <div className='space-y-6'>
                    <div className='flex items-center gap-2'>
                        <Image alt="check" src={Project.status === "Complete" ? Completed : Ongoing} width={25}></Image>
                        <p className='text-md font-bold'>{Project.status}</p>
                    </div>
                    <div><a className=' InnerShadow3 p-[0.7rem] my-4 rounded-[0.5rem]' href={Project.link}>Check This Out!</a></div>
                </div>
            </div >
        }
        </>

    )
}

export default Project