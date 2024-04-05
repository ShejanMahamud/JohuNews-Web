import React from 'react'

const LeftSidebarNews = ({category,title,image,date}) => {
  return (
            <div className='w-full *:mb-4'>
                <img src={image} alt="news.jpg" className='w-full rounded-lg'/>
                <h1 className='text-[#403F3F] text-xl font-semibold'>{title}</h1>
                <div className='flex items-center justify-between'>
                    <span className='text-[#403F3F] font-medium'>{category}</span>
                    <div className='flex items-center gap-2'>
                    <img src="date.svg" alt="date.svg" />
                    <span className='text-[#9F9F9F] font-sm font-medium'>{date}</span>
                    </div>
                </div>
            </div>
  )
}

export default LeftSidebarNews