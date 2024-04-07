import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../Home';
import LeftSidebarNews from '../utils/LeftSidebarNews';

const LeftSidebar = () => {

  const [categories, setCategories] = useState([]);

  const {news, setNews} = useContext(NewsContext)

  useEffect(()=>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  const handleViewByCategory = (id) => {
    console.log("Selected category ID:", id);
    const categoryView = news.filter(newsItem => {
        console.log("News category ID:", newsItem.category_id);
        return newsItem.category_id === id;
    });
    if (categoryView.length > 0) {
        setNews(categoryView);
    } else {
        console.log("No news found for this category");
    }
};


  return (
    <div className='w-full font-poppins'>
        <h1 className='text-xl font-bold px-5 pb-5'>All Category</h1>
        <ul className='*:text-[#9F9F9F] *:mb-2 *:font-medium mb-10 flex flex-col'>
          {
            categories.map(category => <Link key={category.id}><button onClick={()=>handleViewByCategory(category.id)} className='focus:bg-[#E7E7E7] focus:text-[#403F3F] px-5 py-3 rounded-md  focus:font-semibold'>{category.name}</button></Link>
            )
          }
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