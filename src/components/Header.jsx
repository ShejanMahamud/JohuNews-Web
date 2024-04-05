import moment from 'moment/moment'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-3'>
        <h1 className='text-6xl font-oldenglishtextmt text-[#444]'>The Johu News</h1>
        <p className='text-[#706F6F] font-poppins text-lg'>Journalism Without Fear or Favour</p>
        <p className='text-[#403F3F] font-medium text-xl'>{moment().format("dddd")}, <span className='text-[#706F6F]'>{moment().format("MMMM D YYYY")}</span></p>
    </div>
  )
}

export default Header