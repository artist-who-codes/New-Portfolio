import { ProjectType } from '@/types/Project';
const Projects: ProjectType[] = [
    {
        name: "The Flames Game",
        description: "A project I did on leisure time when I was getting into Front-End Development. I used Svelte as framework for this project. The logic to find the result was initially done in Python and later I converted it to Javascript when I was learning Javascript. And the Front-End was added and deployed.",
        date: "Dec 2022",
        status: "Complete",
        link: "https://master--reliable-cendol-ac7511.netlify.app/"
    },
    {
        name: "Todo Manager",
        description: "A sample project forlearning purposes, created to manage tasks, designed with Next.js. I learnt concepts that are new in Next.js like, Rendering methods, Routing Methods and API calls. This Project was done during my initial training period at my current company, and i started to learn UI/UX Designing",
        date: "May 2023",
        status: "Complete",
        link: "https://todo-manager-bqiki15o7-artist-who-codes.vercel.app/"
    },
    {
        name: "Project Viewing",
        description: "Another Sample project for learning purposes, to implement Server side Rendering and Client side Rendering with Logic and implementing authentication for Server Side, Client Side and API Routes. Practiced MongoDB with this Project with the MongoDB Atlas. Crafted with Dynamic Routing and User Authentication",
        date: "May 2023",
        status: "Complete",
        link: "https://github.com/artist-who-codes/Project-Viewing"
    },
    {
        name: "SemScape",
        description: "An ongoing project on the side, along with my friend. Semscape is a pool for study materials. Students struggle sometimes to get the study materials because of some unavoidable factors. With this idea, if every College/University owns a study material pool, it will be very helpful during examination times.",
        date: "Jan 2022",
        status: "Ongoing",
        link: "https://github.com/artist-who-codes/Semscape"
    },
    {
        name: "My Portfolio",
        description: "My first basic-level Portfolio [Feb 2023]. It was completed with React.js and I practiced CSS with it. After I developed myself in UI/UX designing, I recreated my portfolio with more elegancy. I sharpened my UI/UX skills with this Portfolio Site. And also, this website is more efficient and easy to edit",
        date: "July 2023",
        status: "Complete",
        link: ""
    },
]
export default Projects