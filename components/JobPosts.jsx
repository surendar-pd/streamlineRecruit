// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Discord from "../assests/discord.png";

const JobPosts = () => {

    const navigate = useNavigate();

    const jobPosts = [
        {
            date: `5 March`,
            img: Discord,
            companyName: "Discord",
            role:"Frontend Developer",
            duration:"Full Time",
            type:"Tech",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `19 June`,
            img:Discord,
            companyName: "Discord",
            role:"Finance Manager",
            duration:"Full Time",
            type:"Finance",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `20 March`,
            img:Discord,
            companyName: "Discord",
            role:"UI/UX Desiner",
            duration:"Full Time",
            type:"Design",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `13 May`,
            img:Discord,
            companyName: "Discord",
            role:"Marketing Manager",
            duration:"Full Time",
            type:"Marketing",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `9 June`,
            img:Discord,
            companyName: "Discord",
            role:"Backend Developer",
            duration:"Full Time",
            type:"Tech",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `16 April`,
            img:Discord,
            companyName: "Discord",
            role:"Business Analyst",
            duration:"Full Time",
            type:"Tech",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
        {
            date: `24 May`,
            img:Discord,
            companyName: "Discord",
            role:"Full Stack Developer",
            duration:"Full Time",
            type:"Tech",
            location:"California, CA",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus pariatur quod cupiditate aut nesciunt et laudantium, unde consectetur placeat asperiores id beatae sunt velit voluptatum obcaecati repellendus tempora doloribus.",
        },
    ];

    const [header, setHeader] = useState("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300")

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300 bg-white")
            : setHeader("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300")
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <main className="bg-slate-100">
            <div className={header}>
                <div className="flex items-center gap-4">
                    <div onClick={() => navigate("/")} className="hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <h1 className="font-semibold text-2xl lg:text-3xl">Your Job Listings</h1>
                </div>
                <button className="w-fit px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Manage Listing</button>
            </div>
            <main className="w-full pb-16 px-4 md:px-16 pt-28 lg:mx-auto lg:max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        jobPosts.map((job, index) => (
                            <div key={index} className="border bg-white p-4 rounded flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img className="w-8" alt={job.title} src={`${job.img}`}/>
                                        <h1 className="text-base font-medium">{"companyName"}</h1>
                                    </div>
                                    <p className="text-sm text-slate-500">{job.date}</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-semibold text-lg">{job.role}</h1>
                                    <div className="flex items-center text-sm gap-4">
                                        <p className="bg-green-500/20 py-2 px-4 rounded-full text-green-600">{job.duration}</p>
                                        <p className="bg-violet-500/20 py-2 px-4 rounded-full text-violet-600">{job.type}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-slate-500 font-medium text-base">{job.location}</h1>
                                    <p className="text-slate-500 text-sm text-justify">{job.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </main>
    )
}

export default JobPosts