import React from 'react';
import { logo } from '../constants/constant';

function Home() {
  return (
    <div className="home md:w-screen overflow-hidden">
    {/* bg-[#00000069] */}
      <div className="h-screen dw ">  
        <div className="flex flex-row">
          <ul className="list-none text-nowrap w-full items-center flex flex-row md:px-8 md:ml-auto gap-2 md:gap-4  p-2 text-[11px] md:text-sm">
            {/* Logo */}
            <li className="mr-auto flex items-center ">
              <img
                src={logo} // Replace with your logo path
                alt="Logo"
                className="w-[20%]"
              />
            </li>
            {/* Navigation Items */}
            <li className="cursor-pointer hover:underline">Club</li>
            <li className="cursor-pointer hover:underline">Resources</li>
            <li className="cursor-pointer hover:underline">App</li>
            <li className="cursor-pointer hover:underline">Family Office</li>
            <li className="cursor-pointer hover:underline bg-white bg-opacity-10 border-white   rounded-lg p-2 backdrop-blur-md">Sign In</li>
            <li className="cursor-pointer hover:underline text-white p-2 rounded-md bg-black">Become a member</li>
          </ul>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
            <h5 className=' text-[50px]'>Finance.Freedom.Fellows</h5>
            <p className=' text-[25px]'>Private Club of top tech Investors</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
