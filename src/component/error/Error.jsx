import React from 'react';
import { TiArrowBackOutline } from "react-icons/ti";

const Error = () => {
    return (
        <div className="min-h-screen bg-linear-to-b from-[#f0f7f7] to-white flex items-center justify-center relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/70 rounded-[50%] blur-3xl"></div>
                <div className="absolute top-1/4 left-1/3 w-[700px] h-[350px] bg-white/60 rounded-[50%] blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-white/50 rounded-[50%] blur-3xl"></div>
            </div>
            

            <div className="text-center z-10 px-6 max-w-2xl -mt-20">

                <h1 className="text-[160px] sm:text-[200px] md:text-[260px] font-bold leading-none tracking-tighter bg-linear-to-b from-[#5a9a9a] to-[#a0d0d0] bg-clip-text text-transparent">
                    404
                </h1>


                <p className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2">
                    Sorry, that page could not be found
                </p>

                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto">
                    The requested page either doesn't exist or you don't have access to it.
                </p>


                <button
                    onClick={() => window.history.back()}
                    className="
                        px-8 py-3.5
                        bg-[#67bd9f] hover:bg-[#244D3F]
                        text-white
                        text-base font-medium
                        rounded-xl
                        shadow-md hover:shadow-lg
                        transition-all duration-300
                        flex items-center gap-2 mx-auto
                        group
                    "
                >
                    <TiArrowBackOutline className="text-xl group-hover:-translate-x-1 transition-transform" />
                    Go Back Home
                </button>
            </div>


            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                © 2026 KeenKeeper. All rights reserved.
            </div>
        </div>
    );
};

export default Error;