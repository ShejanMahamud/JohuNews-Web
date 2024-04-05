import React from 'react'
import LeftSidebarNews from '../utils/LeftSidebarNews'

const LeftSidebar = () => {
  return (
    <div className='w-full font-poppins'>
        <h1 className='text-xl font-bold px-5 pb-5'>All Category</h1>
        <ul className='*:text-[#9F9F9F] *:mb-2 *:font-medium mb-10'>
            <li ><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>National News</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Breaking News</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Regular News</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>International News</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Sports</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Entertainment</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Culture</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>Arts</button></li>
            <li><button className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>All News</button></li>
        </ul>
        <div className='w-full grid grid-cols-1 row-auto items-center gap-y-10'>
        <LeftSidebarNews title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} image={'news-1.jpg'} category={'Sports'} date={'Jan 4, 2024'}/>
        <LeftSidebarNews title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} image={'news-2.jpg'} category={'Sports'} date={'Jan 4, 2024'}/>
        <LeftSidebarNews title={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} image={'news-3.jpg'} category={'Sports'} date={'Jan 4, 2024'}/>
        </div>
    </div>
  )
}

export default LeftSidebar