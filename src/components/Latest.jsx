import React from 'react'
import Marquee from 'react-fast-marquee'

const Latest = () => {
  return (
    <div className='w-[80%] flex items-center justify-between bg-[#F3F3F3] font-poppins mx-auto px-5 py-2 rounded-lg my-10'>
        <span className='bg-red-500 text-white font-medium text-lg px-5 py-2'>Latest</span>
        <Marquee>
        <h1 className='text-lg font-semibold px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos deserunt asperiores quibusdam quod pariatur quas illo facere quae sit?</h1>
        </Marquee>
    </div>
  )
}

export default Latest