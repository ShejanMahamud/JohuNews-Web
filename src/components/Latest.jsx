import React from 'react'
import Marquee from 'react-fast-marquee'

const Latest = () => {
  return (
    <div className='lg:w-[80%] w-[90%] flex items-center justify-between bg-[#F3F3F3] font-poppins mx-auto px-5 py-2 rounded-lg lg:my-10 my-5'>
        <span className='bg-red-500 text-white font-medium lg:text-lg text-base lg:px-5 px-3 py-2'>Latest</span>
        <Marquee>
        <h1 className='lg:text-lg text-sm font-semibold px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos deserunt asperiores quibusdam quod pariatur quas illo facere quae sit?</h1>
        </Marquee>
    </div>
  )
}

export default Latest