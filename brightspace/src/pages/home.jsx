import React from 'react';
import { logo } from '../constants/constant';

function Home() {
  return (
    <div className="home md:w-screen overflow-x-hidden">
    {/* bg-[#00000069] */}
      <div className=" dw ">  
        <div className="flex flex-row items-center justify-center">
          <ul className="list-none text-nowrap w-full items-center flex flex-row md:px-8 md:ml-auto gap-2 md:gap-4  p-2 text-[11px] md:text-sm">
            {/* Logo */}
            <li className="mr-auto flex items-center ">
              {/* <img
                src={logo} // Replace with your logo path
                alt="Logo"
                className="w-[20%]"
              /> */}
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
        <div className='flex flex-col items-center gap-8 mt-[80px] h-full'>
                <div className='flex flex-col items-center justify-center'>
                  <h5 className='text-[30px] md:text-[50px]'>Finance.Freedom.Fellows</h5>
                  <p className=' text-[15px]'>Private Club of top tech Investors</p>
                </div>
            
            <div className=' p-2 rounded-md text-white bg-black font'>Become a member</div>
            
            <div className='text-white text-[50px] gap-6 flex flex-row bg-white bg-opacity-10 shadow-lg backdrop-blur-md  rounded-full p-2.5 md:p-4 mt-[270px] md:mt-[90px] '>
            {/* <p>  € € € </p> */}
            <div className='flex flex-col items-center justify-center flex-nowrap'>
              <h5 className='text-[20px] md:text-[25px]'>410+</h5>
              <p className='text-[11px] text-nowrap'>Tech Professionals</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
              <h5 className='text-[20px] md:text-[25px]'>€11M</h5>
              <p className='text-[11px] text-nowrap'>Invested</p>
            </div>


            <div className='flex flex-col items-center justify-center'>
              <h5 className='text-[20px] md:text-[25px]'>14</h5>
              <p className='text-[11px] text-nowrap'>Deals Made</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <h5 className='text-[20px] md:text-[25px]'>2.5</h5>
              <p className='text-[11px] text-nowrap'>Years on the market</p>
            </div>
            
            </div>

        </div>
       
      </div>
    </div>
  );
}

export default Home;
