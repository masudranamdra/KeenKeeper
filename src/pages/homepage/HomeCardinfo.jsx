import React from "react";
import { Link } from "react-router";

const HomeCardinfo = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 p-6 text-center">
            <div className="flex justify-center ">
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
            </div>

            <h2 className="text-xl font-semibold text-[#244D3F] mt-2">
                {friend.name}
            </h2>

            <p className="text-gray-500 text-sm">
                {friend.days_since_contact} days ago
            </p>

            <div className="flex justify-center gap-1.5 mt-3">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-emerald-100 text-[#244D3F] text-xs font-medium px-4 py-1 rounded-full"
                    >
                        {tag.toUpperCase()}
                    </span>
                ))}
            </div>

            <div className="mt-2">
                <span
                    className={`inline-block px-6 py-1.5 text-sm font-semibold rounded-full ${
                        friend.status === "overdue"
                            ? "bg-red-500 text-white"
                            : friend.status === "almost due"
                            ? "bg-orange-400 text-white"
                            : "bg-[#244D3F] text-white"
                    }`}
                >
                    {friend.status === "almost due" 
                        ? "Almost Due" 
                        : friend.status.toUpperCase()}
                </span>
            </div>
        </Link>
    );
};

export default HomeCardinfo;