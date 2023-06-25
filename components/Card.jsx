// import React from 'react'
import People from "../assests/people.png";

const Card = () => {
    return (
        <main className="p-4 py-[100px] md:px-16 lg:max-w-6xl lg:mx-auto text-left w-full h-full flex justify-center items-center">
            <div className="bg-blue-500 shadow-lg w-full rounded-lg p-8 flex flex-col md:flex-row md:gap-4 items-center relative">
                <img className="w-40 md:w-56 lg:w-60 absolute md:-top-28 -top-24" src={People} alt={"people"}/>
                <div className="mt-16 md:ml-64 md:mt-0 text-white flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Unlock the Power of StreamlineRecruit Today!</h1>
                    <p className="font-normal text-sm text-justify lg:text-base">Join thousands of satisfied hiring managers and HR professionals who have experienced the transformational power of StreamlineRecruit. Streamline your recruitment process, save valuable time and resources, and find the perfect candidate for your organization effortlessly.</p>
                    <button className="py-2 px-4 w-full lg:w-fit text-sm bg-white hover:bg-slate-100 transition-all duration-300 rounded cursor-pointer text-black font-medium">Get Started</button>
                </div>
            </div>
        </main>
    )
}

export default Card