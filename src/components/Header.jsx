import moment from 'moment/moment'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col lg:gap-3 gap-1 mt-5'>
        <h1 className='lg:text-6xl text-4xl font-oldenglishtextmt text-[#444] text-center'>The Johu News</h1>
        <p className='text-[#706F6F] font-poppins lg:text-lg text-base'>Journalism Without Fear or Favour</p>
        <p className='text-[#403F3F] font-medium lg:text-xl text-lg'>{moment().format("dddd")}, <span className='text-[#706F6F]'>{moment().format("MMMM D YYYY")}</span></p>
    </div>
  )
}

export default Header