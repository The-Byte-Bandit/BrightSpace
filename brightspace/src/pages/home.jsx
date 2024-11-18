import React from 'react';
import { logo, image1, image2, image3, } from '../constants/constant';

function Home() {
  return (
    <div className="home md:w-screen overflow-x-hidden min-h-screen flex flex-col">
      {/* Navigation */}
      <div className="flex flex-row w-full p-4">
        <ul className="list-none text-nowrap items-center justify-center  w-full flex flex-row gap-4 text-sm">
          
          <li className="cursor-pointer hover:scale-110  md:ml-auto text-[#11px] md:text-[#14px]">Club</li>
          <li className="cursor-pointer hover:scale-110  text-[#11px] md:text-[#14px]">Resources</li>
          <li className="cursor-pointer hover:scale-110  text-[#11px] md:text-[#14px]">App</li>
          <li className="cursor-pointer hover:scale-110  text-[#11px] md:text-[#14px]">Family Office</li>
          <li className="cursor-pointer hover:scale-110  text-[#11px] md:text-[#14px] bg-white bg-opacity-10 border-white rounded-lg p-2 backdrop-blur-md">
            Sign In
          </li>
          <li className="cursor-pointer hover:scale-110 hidden md:block bg-black text-white p-2 rounded-lg">
            Become a member
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1">
      <div className="flex bg-white bg-opacity-10 shadow-lg backdrop-blur-md rounded-full px-4 py-2 items-center gap-1">
  <div className="relative flex items-center">
    <img
      src={image1}
      alt="Investor 1"
      className="w-7 h-7 md:w-8 md:h-8 rounded-3xl transform translate-x-0"
    />
    <img
      src={image2}
      alt="Investor 2"
      className="w-7 h-7 md:w-8 md:h-8 rounded-3xl transform translate-x-[-15px]"
    />
    <img
      src={image3}
      alt="Investor 3"
      className="w-7 h-7 md:w-8 md:h-8 rounded-3xl transform translate-x-[-31px]"
    />
  </div>
  <p className="text-sm md:text-base -ml-4">
    400+ tech investors joined the club. Join us!
  </p>
</div>


        <h5 className="text-[30px] md:text-[50px] xl:text-[50px] 2xl:text-[90px] font-medium leading-tight text-center">
          Finance.Freedom.Fellows
        </h5>
        <p className="text-[15px] md:text-base leading-relaxed text-center">
          Private Club of top tech Investors
        </p>
        <div className="cursor-pointer hover:scale-110 bg-black text-white p-2 rounded-lg mt-[10px]">
            Become a member
          </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center items-center mb-8">
        <div className="text-white flex gap-6 bg-white bg-opacity-10 shadow-lg backdrop-blur-md rounded-full px-4 py-2">
          <div className="flex flex-col items-center">
            <h5 className="text-[20px] md:text-[25px]">410+</h5>
            <p className="text-[11px] text-center">Tech Professionals</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[20px] md:text-[25px]">€11M</h5>
            <p className="text-[11px] text-center">Invested</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[20px] md:text-[25px]">14</h5>
            <p className="text-[11px] text-center">Deals Made</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[20px] md:text-[25px]">2.5</h5>
            <p className="text-[11px] text-center">Years on the Market</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
