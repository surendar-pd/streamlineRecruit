// import React from 'react'

import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const [header, setHeader] = useState("w-full fixed top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("w-full fixed transition-all border-b duration-300 bg-white top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")
            : setHeader("w-full fixed transition-all duration-300 top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    return (
        <div className={header}>
            <a href="/" className="font-semibold text-xl">Streamline<span className="text-blue-500">Recruit</span></a>
            <div className="lg:flex items-center gap-8 hidden">
                <h1 className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Home</h1>
                <a href="#features" className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">About</a>
                <h1 className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Blog</h1>
                <a href="#contact" className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Contact</a>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={() => navigate(`/job-posts`)} className="py-2 px-4 text-sm outline-none rounded cursor-pointer hover:text-slate-800 hover:bg-blue-500/10 transition-all duration-300 text-slate-500 font-medium">Post a Job</button>
                <button onClick={() => navigate(`/login`)} className="py-2 px-4 text-sm bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Login</button>
            </div>
        </div>
    )
}

export default Header