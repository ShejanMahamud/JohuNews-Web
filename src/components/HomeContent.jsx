import React from 'react';
import HomeNews from '../utils/HomeNews';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const HomeContent = () => {
  return (
    <div className='w-full my-10'>
        <div className='grid lg:grid-cols-4 grid-cols-1 grid-rows-1 items-start w-[90%] mx-auto'>
        <LeftSidebar/>
        <div className='col-span-2 font-poppins'>
        <h1 className='font-semibold text-xl mb-5 px-5'>JohuNews Home</h1>
        <div className='w-full grid grid-cols-1 row-auto gap-y-10 px-5'>
            <HomeNews author={'Shejan Mahamud'} authorImg={'author.png'} newsImg={'1.jpg'} title={'Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet'} star={4} views={599} description={'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...'}/>
            <HomeNews author={'Shejan Mahamud'} authorImg={'author.png'} newsImg={'1.jpg'} title={'Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet'} star={5} views={539} description={'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...'}/>
            <HomeNews author={'Shejan Mahamud'} authorImg={'author.png'} newsImg={'1.jpg'} title={'Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet'} star={5} views={539} description={'Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...'}/>
        </div>
        </div>
        <RightSidebar/>
    </div>
    </div>
  )
}

export default HomeContent