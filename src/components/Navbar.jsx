import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[90%] mx-auto flex items-center'>
        <ul className='flex items-center gap-10 text-[#706F6F] justify-start w-full'>
            <li>Home</li>
            <li>Latest</li>
            <li>Sports</li>
            <li>Entertainment</li>
            <li>International</li>
        </ul>
        <div className='flex items-center gap-3 justify-end w-full'>
            <img src="user.svg" alt="user.svg" />
            <button className='bg-[#403F3F] font-bold text-white text-lg px-5 py-2'>Login</button>
        </div>
    </div>
  )
}

export default Navbar