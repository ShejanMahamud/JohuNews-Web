import React from 'react';

const HomeNews = ({ author, date, title, description, star, views, authorImg, newsImg }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(star);
  // Calculate the percentage of the last star to be filled
  const decimalPart = star - fullStars;
  const lastStarFillPercentage = decimalPart * 100;

  return (
    <div className='border border-[#E7E7E7] rounded-md w-full'>
      <div className='bg-[#F3F3F3] flex w-full items-center justify-between px-5 py-3'>
        <div className='flex items-center gap-3'>
          <img src={authorImg} alt="author.png" className='w-12 rounded-full'/>
          <div className='flex flex-col'>
            <h1>{author}</h1>
            <p>{date}</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <img src="bookmark.svg" alt="bookmark.svg" />
          <img src="share.svg" alt="share.svg" />
        </div>
      </div>
      <div className='w-full px-5 *:my-5'>
        <h1 className='font-bold text-[#403F3F] text-xl'>{title}</h1>
        <img src={newsImg} alt="news.jpg" className='w-full'/>
        <p className='text-[#706F6F] leading-[26px]'>
          {description.slice(0,200)}... <span className='text-[#F75B5F] font-semibold'>Read More</span>
        </p>
        <div className='w-full flex items-center justify-between text-[#706F6F]'>
          <div className='flex items-center lg:gap-3 gap-1'>
            {[...Array(fullStars)].map((_, index) => (
              <img key={index} src="star.svg" alt="star.svg" />
            ))}
            {lastStarFillPercentage > 0 && (
              <img
                src="star.svg"
                alt="star.svg"
                style={{ width: `${lastStarFillPercentage}%` }}
              />
            )}
            <span>{star}</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src="eye.svg" alt="eye.svg" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
