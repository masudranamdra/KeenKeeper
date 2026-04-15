import React, { useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { IoMdClock } from 'react-icons/io';
import { IoStatsChart } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineHome } from "react-icons/ai";
import { TbClockHour3 } from "react-icons/tb";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        isActive
            ? "flex items-center gap-2 px-5 py-2 rounded-md bg-[#244D3F] text-white font-semibold shadow-md transition-all"
            : "flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-gray-100 transition-all";

    return (
        <div className="bg-base-100 shadow-sm px-6">

            <div className="container mx-auto flex items-center justify-between py-4">


                <div className="text-3xl ">
                    <span className="text-black font-bold">Keen</span>
                    <span className="text-[#244D3F] font-semibold">Keeper</span>
                </div>


                <ul className="hidden md:flex gap-6 font-semibold">

                    <li>
                        <NavLink to="/" className={linkStyle}>
                            <AiOutlineHome /> Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/timeline" className={linkStyle}>
                            <TbClockHour3 />
                            Timeline
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/status" className={linkStyle}>
                            <ImStatsDots /> Stats
                        </NavLink>
                    </li>

                </ul>


                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>

            </div>


            {open && (
                <div className="md:hidden px-6 pb-4 space-y-3 font-semibold">

                    <NavLink to="/" onClick={() => setOpen(false)} className={linkStyle}>
                        <AiOutlineHome /> Home
                    </NavLink>

                    <NavLink to="/timeline" onClick={() => setOpen(false)} className={linkStyle}>
                        <TbClockHour3 /> Timeline
                    </NavLink>

                    <NavLink to="/status" onClick={() => setOpen(false)} className={linkStyle}>
                        <ImStatsDots /> Stats
                    </NavLink>

                </div>
            )}

        </div>
    );
};

export default Navbar;