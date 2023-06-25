// import React from 'react'

const Features = () => {
    return (
        <main id="features" className="p-4 md:px-16 lg:max-w-6xl py-[140px] lg:mx-auto text-left w-full h-full flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="lg:w-1/ w-full text-2xl lg:text-center">
                <h1 className="lg:text-4xl font-semibold text-3xl">Perfect for<span className="text-blue-500 "> Candidates. </span><span className="hidden lg:inline text-3xl lg:text-4xl">Efficient for <span className="text-blue-500"> Employers.</span></span></h1>
                <h1 className="lg:hidden font-semibold text-3xl">Efficient for<span className="text-blue-500"> Employers.</span></h1>
                <p className="text-sm lg:text-base text-slate-500 mt-8 mb-16">Join thousands of satisfied hiring managers and HR professionals who have experienced the transformational power of StreamlineRecruit. Streamline your recruitment process, save valuable time and resources, and find the perfect candidate for your organization effortlessly.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    <div className="border group rounded p-4 text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <h1 className="text-base font-medium transition-all duration-300 group-hover:text-blue-500 lg:text-lg">Intuitive and User-Friendly Interface</h1>
                        </div>
                        <p className="text-slate-500 text-sm font-normal text-justify">Say goodbye to complex and overwhelming recruitment platforms. StreamlineRecruit offers a sleek, modern interface that is incredibly easy to navigate, ensuring a seamless experience for both hiring managers and HR professionals.</p>
                    </div>
                    <div className="border group rounded p-4 text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <h1 className="text-base font-medium transition-all duration-300 group-hover:text-blue-500 lg:text-lg">Automated Job Posting and Distribution</h1>
                        </div>
                        <p className="text-slate-500 text-sm font-normal text-justify">With just a few clicks, you can effortlessly post your job openings on multiple job boards, social media platforms, and industry-specific websites. Reach a wider pool of qualified candidates and maximize your recruitment efforts without spending hours manually posting on each platform.</p>
                    </div>
                    <div className="border group rounded p-4 text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            <h1 className="text-base font-medium transition-all duration-300 group-hover:text-blue-500 lg:text-lg">Customizable Application Forms</h1>
                        </div>
                        <p className="text-slate-500 text-sm font-normal text-justify">Tailor your application forms to gather specific information from candidates, ensuring you receive the most relevant details for efficient screening. From educational qualifications to work experience and specialized skills, you have full control over the data you collect.</p>
                    </div>
                    <div className="border group rounded p-4 text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <h1 className="text-base font-medium transition-all duration-300 group-hover:text-blue-500 lg:text-lg">Smart Candidate Filtering and Ranking</h1>
                        </div>
                        <p className="text-slate-500 text-sm font-normal text-justify">Our advanced algorithms analyze and evaluate candidate profiles, saving you valuable time and effort. StreamlineRecruit automatically filters and ranks applicants based on their qualifications and suitability, allowing you to focus on the top contenders quickly.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Features