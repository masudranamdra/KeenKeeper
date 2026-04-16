import React, { useEffect, useState } from 'react';
import { FaCamera, FaChevronDown, FaCheck } from 'react-icons/fa';
import { MdAddCall, MdOutlineSms, MdDelete, MdFilterNone } from 'react-icons/md';
import { toast } from 'react-toastify';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        try {
            const saved = localStorage.getItem("timeline");
            const parsed = saved ? JSON.parse(saved) : [];
            setTimeline(parsed);
        } catch (error) {
            console.error("Timeline localStorage error:", error);
            setTimeline([]);
            localStorage.removeItem("timeline");
        }
    }, []);

    const handleDelete = (id) => {
        const updated = timeline.filter(item => item.id !== id);
        setTimeline(updated);
        localStorage.setItem("timeline", JSON.stringify(updated));
    };

    // const handleClearAll = () => {
    //     setTimeline([]);
    //     localStorage.removeItem("timeline");
    // };

    const filteredTimeline = timeline.filter(item => {
        if (filter === "all") return true;
        return item.type === filter;
    });

 
    const getActionLabel = (type) => {
        switch (type) {
            case "call":
                return (
                    <>
                        <MdAddCall /> Call
                    </>
                );
            case "sms":
                return (
                    <>
                        <MdOutlineSms /> Text
                    </>
                );
            case "video":
                return (
                    <>
                        <FaCamera /> Video
                    </>
                );
            default:
                return null;
        }
    };

    const options = [
        { label: 'Filter timeline', value: 'all' },
        { label: 'Text', value: 'sms' },
        { label: 'Call', value: 'call' },
        { label: 'Video', value: 'video' },
    ];

    // Empty state
    if (timeline.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="text-5xl mb-3">
                    <MdFilterNone />
                </div>
                <h2 className="text-xl font-bold text-gray-800">No Timeline Data</h2>
                <p className="text-gray-500 mt-2 text-sm">
                    Start adding calls, SMS, or video check-ins to see your activity here.
                </p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">

                {/* FILTER */}
                <div className="relative w-56">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border-gray-700 rounded-lg shadow-sm"
                    >
                        <span className="flex items-center gap-2">
                            {filter !== 'all' && <FaCheck className="text-[10px] border border-gray-400 text-gray-400" />}
                            {options.find(opt => opt.value === filter)?.label}
                        </span>

                        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                        <div className="absolute w-full mt-2 bg-white border rounded-xl border-gray-200 shadow-lg overflow-hidden z-10">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setFilter(option.value);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* CLEAR ALL */}
                {/* <button
                    onClick={() => {
                        toast.success("All timeline cleared");
                        handleClearAll();
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm"
                >
                    Delete All
                </button> */}
            </div>


            <div className="space-y-4">
                {filteredTimeline.length > 0 ? (
                    filteredTimeline.map((item, index) => (
                        <div
                            key={item.id ?? index}
                            className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
                        >
                            <div className="flex justify-between">
                                <div>
                                    <p className="flex items-center gap-2 font-medium">
                                        {getActionLabel(item.type)}{" "}
                                        <span>{item.name}</span>
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date(item.date).toLocaleString()}
                                    </p>
                                </div>

                                <span className="text-xs text-center  text-blue-600 rounded-sm">
                                    {item.type}
                                </span>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => {
                                        toast.success("Deleted successfully");
                                        handleDelete(item.id);
                                    }}
                                    className="text-red-500 text-sm flex items-center gap-1"
                                >
                                    <MdDelete /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-400">
                        No {filter} activities found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;