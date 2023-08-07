import React from 'react';
import Image from 'next/image';
import Blob from '../../public/Vector.svg'
import Icons from './Icons';
import Logo from '../../public/Logo.svg'
import Project from "./Project"
import ProjectsData from '../data/Projects';
import line from "../../public/line.svg"
import line2 from "../../public/line2.svg"
import line3 from "../../public/line3.svg"
import LinkedIn from "../../public/LinkedIn.svg"
import Gmail from "../../public/Mail.svg"
import GitHub from "../../public/Github.svg"
import start from '../../public/start.svg'
import mid from '../../public/mid.svg'
import end from '../../public/end.svg'

type Props = {}

const Home = (props: Props) => {
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <>{width > 640 ?
            <div>
                {/* ---------------------NAVBAR--------------------- */}
                <div className='m-3 pr-4 sm:m-4 rounded-full fixed bg-[#2d2d2d] sm:px-20 text:xs py-2 text-[#E5E5E5] flex justify-between sm:text-lg w-[97%] Animation'>
                    <div>
                        <a href="https://github.com/artist-who-codes"><Image alt="Logo" src={Logo} width={100} height={100} className='p-3'></Image></a>
                    </div>
                    <div className='flex sm:py-2 sm:gap-10 py-4 '>
                        <a href="#AboutMe" className="NavShadow px-[1rem] py-[1rem]" ><button>AboutMe</button></a>
                        <a href='#Skills' className="NavShadow px-[1rem] py-[1rem]" ><button>Skills</button></a>
                        <a href='#Projects' className="NavShadow px-[1rem] py-[1rem]" ><button>Projects</button></a>
                        <a href='#Qualifications' className="NavShadow px-[1rem] py-[1rem]"><button>Qualifications</button></a>
                        <a href='#ContactMe' className="NavShadow px-[1rem] py-[1rem]"> <button>HireMe</button></a>
                    </div>
                </div >


                <div className='flex flex-col gap-16 pt-40 mx-9 sm:mx-40 Animation' >
                    {/* ---------------------ABOUT ME--------------------- */}
                    <section className="AboutMe sm:flex justify-center gap-14" id="AboutMe">
                        <section className=" text-xl sm:text-lg font-medium w-[35rem] my-auto">
                            <p>Hello!</p>
                            <span className="text-3xl "> I am <b >Abirami</b></span>
                            <p className='py-3 w-[55%] sm:w-[100%]'>A Front-End Developer,UI/UX Designer, pursuing my Bachelors in Computer Science. I am skilled in popular Full-Stack framework Next.js, React.js and TypeScript. I am also skilled in TailwindCSS. I love to learn and I am dedicated to personal growth.</p>
                            <a href='#Projects'><button className='OuterShadow_btn p-3 my-4 rounded-xl'>Check my Projects</button></a>
                        </section>
                        <section>
                            <Image alt="vector" src={Blob}></Image>
                        </section>
                    </section>

                    {/* ---------------------SKILLS--------------------- */}
                    <section className="Skills" id="Skills">
                        <h1 className='text-4xl font-bold'>My Technical Skills</h1>
                        <div className='py-16'>
                            <Icons />
                        </div>
                    </section>

                    {/* ---------------------PROJECTS--------------------- */}
                    <div className="Projects" id="Projects">
                        <h1 className='text-4xl font-bold'>My Projects</h1>
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
                    <section id="Qualifications" className='Qualifications'>
                        <h1 className='text-4xl font-bold'>My Journey</h1>
                        <div className='mx-16'>
                            <div className='flex p-8'>
                                <Image alt="line" src={line} width={80}></Image>
                                <div className='mx-5 mt-6'>
                                    <h2 className='text-3xl font-bold rounded-lg '>Front-End Developer</h2>
                                    <p className='text-xl font-medium'>FossFreaks (March 2023 - Present)</p>
                                    <p className='text-lg py-4 leading-6 font-medium w-[60vw]'>Working as a Front-End Developer in a startup company, Fossfreaks Software Solutions. Gaining exposure to latest technologies and gaining hands-on experience in Front-End and Back-End Development with few Frameworks and Databases like Next.js and MongoDB. </p>
                                </div>
                            </div>
                            <div className='flex px-8 -mt-16'>
                                <Image alt="line" src={line2} width={80}></Image>
                                <div className='mx-5 mt-14'>
                                    <h2 className='text-3xl font-bold rounded-lg '>Bachelors in Computer Science</h2>
                                    <p className='text-xl font-medium'>Bishop Heber College, Trichy (August 2021 - May 2024)</p>
                                    <p className='text-lg pt-4 leading-6 font-medium w-[60vw]'>Pursuing my Bachelors Degree in Bishop Heber College, Tiruchirapalli. Done an NPTEL course on Java. Learnt C, Python, Java, SQLPlus, PHP and so on (Intermediate level of Knowledge). CGPA gained for 4 semesters is <span className='font-extrabold'>8.24</span> Contributed to Debian Day on 16th of August 2022 </p>
                                </div>
                            </div><div className='flex px-8 -mt-16'>
                                <Image alt="line" src={line3} width={80}></Image>
                                <div className='mx-5 mt-14'>
                                    <h2 className='text-3xl font-bold rounded-lg '>Secondary and Higher Secondary Education</h2>
                                    <p className='text-xl font-medium'> Sri GRM School, Thiruvarur (2018 and 2020)</p>
                                    <p className='text-lg pt-4 leading-6 font-medium w-[60vw]'>Did my Secondary and Higher Secondary Education in Thiruvarur Sri GRM Girls Higher Secondary School. Completed SSLC with <span className='font-extrabold'>92.6%</span>. Completed HSC with  <span className='font-extrabold'>94.5%</span></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*---------------------Hire Me--------------------*/}
                    <section className='InnerShadow2 mb-20 mx-24 rounded-full py-10 ContactMe' id="ContactMe">
                        <h1 className='text-4xl font-bold px-28'>Contact Me</h1>
                        <div className='flex pt-5 gap-24 justify-center text-lg font-bold'>
                            <a className='flex flex-col items-center' href='https://github.com/artist-who-codes'><Image src={GitHub} alt="Github" width={120} className='-px-1'></Image> <p>GitHub</p></a>
                            <a className='flex flex-col items-center' href='www.linkedin.com/in/abirami-muthukumarasamy-1b7483227'><Image src={LinkedIn} alt="Github" width={120} className='-px-1'></Image><p>LinkedIn</p></a>
                            <a className='flex flex-col items-center' href='mailto:abimuthu.2114@gmail.com'><Image src={Gmail} alt="Github" width={120} className='-px-1'></Image><p>Gmail</p></a>
                        </div>
                    </section>
                </div >
            </div>
            :
            <div>
                {/* ---------------------NAVBAR--------------------- */}

                <div className='m-1 fixed bg-[#2d2d2d] text-[#E5E5E5] flex justify-between text-sm rounded-full Animation px-4 gap-2 py-5 w-[98vw] font-medium'>
                    <a href="#AboutMe" className="NavShadow" ><button>Myself</button></a>
                    <a href='#Skills' className="NavShadow" ><button>Skills</button></a>
                    <a href='#Projects' className="NavShadow" ><button>Projects</button></a>
                    <a href='#Qualifications' className="NavShadow"><button>Qualification</button></a>
                    <a href='#ContactMe' className="NavShadow"> <button>HireMe</button></a>
                </div >

                <div className='mx-8'>
                    <div className='flex flex-col gap-14 pt-24 mx-auto sm:mx-40 Animation' >
                        {/* ---------------------ABOUT ME--------------------- */}
                        <section className="AboutMe sm:flex sm:justify-center sm:gap-14 flex flex-col gap-5" id="AboutMe">
                            <section className=" text-md font-medium ">
                                <p>Hello!</p>
                                <span className="text-3xl "> I am <b >Abirami</b></span>
                                <p className='py-3 '>A Front-End Developer,UI/UX Designer, pursuing my Bachelors in Computer Science. I am skilled in popular Full-Stack framework Next.js, React.js and TypeScript. I am also skilled in TailwindCSS. I love to learn and I am dedicated to personal growth.</p>
                                <a href='#Projects'><button className='OuterShadow_btn text-md px-3 py-2 my-4 rounded-xl'>Check my Projects</button></a>
                            </section>
                            <section>
                                <Image alt="vector" width={400} src={Blob}></Image>
                            </section>
                        </section>

                        {/* ---------------------SKILLS--------------------- */}
                        <section className="Skills" id="Skills">
                            <h1 className='text-3xl font-bold'>My Skills</h1>
                            <div className='py-9'>
                                <Icons />
                            </div>
                        </section>

                        {/* ---------------------PROJECTS--------------------- */}
                        <div className="Projects" id="Projects">
                            <h1 className='text-3xl font-bold'>My Projects</h1>
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:py-16 py-10">
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
                        <section id="Qualifications" className='Qualifications'>
                            <h1 className='text-3xl font-bold'>My Journey</h1>
                            <div className='-ml-5'>
                                <div className='flex'>
                                    <Image alt="line" src={start} width={90}></Image>
                                    <div className=''>
                                        <h2 className='text-lg font-bold rounded-lg pt-6'>Front-End Developer</h2>
                                        <p className='text-md font-medium'>FossFreaks (March 2023 - Present)</p>
                                        <p className='text-md pt-3 leading-[1.37rem] font-medium w-[55vw]'>Working as a Front-End Developer in a startup company, Fossfreaks Software Solutions. Gaining exposure to latest technologies and gaining hands-on experience in Front-End and Back-End Development with few Frameworks and Databases like Next.js and MongoDB. </p>
                                    </div>
                                </div>
                                <div className='flex -mt-14'>
                                    <Image alt="line" src={mid} width={90}></Image>
                                    <div className='mt-14'>
                                        <h2 className='text-lg font-bold rounded-lg '>Bachelors in Computer Science</h2>
                                        <p className='text-md font-medium'>Bishop Heber College, Trichy (August 2021 - May 2024)</p>
                                        <p className='text-md py-3 leading-[1.37rem] font-medium w-[55vw]'>Doing my Bachelors Degree in Bishop Heber College, Tiruchirapalli. Done an NPTEL course on Java. Learnt intermediate level knowledge of C, Python, Java, SQLPlus, PHP and so on. CGPA gained for 4 semesters is <span className='font-extrabold'>8.24</span> Contributed to Debian Day on 16th of August 2022 </p>
                                    </div>
                                </div><div className='flex -mt-14'>
                                    <Image alt="line" src={end} width={90}></Image>
                                    <div className='mt-14'>
                                        <h2 className='text-lg font-bold rounded-lg pt-3 '>Secondary and Higher Secondary Education</h2>
                                        <p className='text-md font-medium'> Sri GRM School, Thiruvarur (2018 and 2020)</p>
                                        <p className='text-md pt-2 leading-[1.37rem] font-medium w-[55vw]'>Did my Secondary and Higher Secondary Education in Thiruvarur Sri GRM Girls Higher Secondary School. Completed SSLC with <span className='font-extrabold'>92.6%</span>. Completed HSC with  <span className='font-extrabold'>94.5%</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*---------------------Hire Me--------------------*/}
                        <section className='InnerShadow2 rounded-xl mb-10 p-5 ContactMe' id="ContactMe">
                            <h1 className='text-2xl font-bold'>Hire Me</h1>
                            <div className='flex justify-center pt-3 gap-2 text-sm font-bold'>
                                <a className='flex flex-col items-center' href='https://github.com/artist-who-codes'><Image src={GitHub} alt="Github" width={120} className='-px-1'></Image> <p>GitHub</p></a>
                                <a className='flex flex-col items-center' href='https://linkedin.com/in/abirami-muthukumarasamy-1b7483227'><Image src={LinkedIn} alt="Github" width={120} className='-px-1'></Image><p>LinkedIn</p></a>
                                <a className='flex flex-col items-center' href='mailto:abimuthu.2114@gmail.com'><Image src={Gmail} alt="Github" width={120} className='-px-1'></Image><p>Gmail</p></a>
                            </div>
                        </section>
                    </div >
                </div>
            </div>
        }
        </>
    )
}

export default Home