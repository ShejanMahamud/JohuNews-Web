import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";

const RightSidebar = () => {
  return (
    <div className='w-full font-poppins mt-20 lg:mt-0'>
        <div className='w-full mb-5'>
            <h1 className='font-semibold text-xl mb-4'>Login With</h1>
            <button className='flex items-center gap-3 border-2 border-blue-500 rounded-lg w-full px-2 py-2 font-medium mb-2'>
            <FaGoogle className='text-xl text-blue-500'/> <span className='text-blue-500 text-sm'>Login with Google</span>
            </button>
            <button className='flex items-center gap-3 border-2 border-[#403F3F] rounded-lg w-full px-2 py-2 font-medium'>
            <FaGithubAlt  className='text-xl'/> <span className='text-sm'>Login with Github</span>
            </button>
        </div>
        <div className='w-full mb-5'>
            <h1 className='font-semibold text-xl mb-4'>Find Us On</h1>
            <div className='border border-[#E7E7E7] rounded-lg w-full'>
                <a href='https://www.facebook.com/shejanmahamud.me' className='flex items-center gap-3 border-b border-[#E7E7E7] py-5 px-3'>
                    <img src="facebook.svg" alt="facebook.svg" />
                    <span className='text-[#706F6F] font-medium'>Facebook</span>
                </a>
                <a href='https://www.twitter.com/@shejan_mahamud9' className='flex items-center gap-3 border-b border-[#E7E7E7] py-5 px-3'>
                    <img src="twitter.svg" alt="facebook.svg" />
                    <span className='text-[#706F6F] font-medium'>Twitter</span>
                </a>
                <a href='https://www.instagram.com/shejanmahamud.me' className='flex items-center gap-3 py-5 px-3'>
                    <img src="instagram.svg" alt="facebook.svg" />
                    <span className='text-[#706F6F] font-medium'>Instagram</span>
                </a>
            </div>
        </div>
        <div className='w-full bg-[#F3F3F3] py-10 px-3 mb-10'>
            <h1 className='font-semibold text-xl mb-8'>Kids Zone</h1>

            <div className='bg-white w-[90%] mx-auto border border-[#E7E7E7] rounded-md mb-12'>
                <div className='bg-white w-full flex items-center flex-col *:mb-3 justify-center py-4 -rotate-[6.743deg] border border-[#E7E7E7] rounded-md'>
                    <img src="swimming.jpg" alt="swimming.jpg" />
                    <h1 className='font-semibold text-xl text-[#403F3F]'>Swimming</h1>
                </div>
            </div>
            <div className='bg-white w-[90%] mx-auto border border-[#E7E7E7] rounded-md mb-12'>
                <div className='bg-white w-full flex items-center flex-col *:mb-3 justify-center py-4 -rotate-[6.743deg] border border-[#E7E7E7] rounded-md'>
                    <img src="class.jpg" alt="class.jpg" />
                    <h1 className='font-semibold text-xl text-[#403F3F]'>Class</h1>
                </div>
            </div>
            <div className='bg-white w-[90%] mx-auto border border-[#E7E7E7] rounded-md'>
                <div className='bg-white w-full flex items-center flex-col *:mb-3 justify-center py-4 -rotate-[6.743deg] border border-[#E7E7E7] rounded-md'>
                    <img src="playground.jpg" alt="playground.jpg" />
                    <h1 className='font-semibold text-xl text-[#403F3F]'>Playground</h1>
                </div>
            </div>
        </div>
        <div className="w-full bg-[url('neon-bg.jpg')] h-[500px]">
            <div className="bg-[#05001dcc] w-full h-full flex items-center flex-col justify-center gap-5">
                <h1 className='text-white text-3xl font-bold text-center px-3 leading-[45px]'>Create an Amazing Newspaper</h1>
                <p className='text-white leading-[26px] px-3 text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='bg-pink-600 px-6 py-3 font-medium text-lg text-white'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar