import React from 'react';
import { FaUserFriends, FaUserPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IoMdAdd } from "react-icons/io";

const HomeHeader = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 max-w-md mx-auto text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
        </div>


        <div className="flex justify-center mb-12">
          <button
            onClick={() => toast.success("Friend added ")}
            className="bg-[#244D3F] hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-md flex items-center gap-3 text-lg shadow-lg shadow-emerald-200 transition-all justify-center active:scale-95">
            <span className="text-xl text-center"> <IoMdAdd />
            </span>
            Add a Friend
          </button>
        </div>

        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-lg hover:shadow-md p-6 justify-center shadow-sm flex items-center gap-4">
            <div>
              <div className="text-4xl text-center font-bold text-[#244D3F]">12</div>
              <div className="text-gray-500 text-sm text-center">Total Friends</div>
            </div>
          </div>


          <div className="bg-white rounded-lg hover:shadow-md justify-center p-6 shadow-sm flex items-center gap-4">
            
            <div>
              <div className="text-4xl font-bold text-center text-[#244D3F]">3</div>
              <div className="text-gray-500 text-sm">On Track</div>
            </div>
          </div>


          <div className="bg-white rounded-lg hover:shadow-md justify-center p-6 shadow-sm flex items-center gap-4">
            <div>
              <div className="text-4xl font-bold text-center text-[#244D3F]">6</div>
              <div className="text-gray-500 text-sm">Need Attention</div>
            </div>
          </div>


          <div className="bg-white hover:shadow-md rounded-lg justify-center p-6 shadow-sm flex items-center gap-4">
            
            <div>
              <div className="text-4xl text-center font-bold text-[#244D3F]">12</div>
              <div className="text-gray-500 text-sm">Interactions This Month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-14"></div>

    </div>
  );
};

export default HomeHeader;