import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NewsContext } from '../Home';
import HomeNews from '../utils/HomeNews';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const HomeContent = () => {
  
const {news} = useContext(NewsContext)

const [currentPage, setCurrentPage] = useState(0);
const itemsPerPage = 3; 

const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
};

const offset = currentPage * itemsPerPage;
  const paginatedAyahs = news.slice(offset, offset + itemsPerPage);

  return (
    <div className='w-full my-10'>
        <div className='grid lg:grid-cols-4 grid-cols-1 grid-rows-1 items-start w-[90%] mx-auto'>
        <LeftSidebar/>
        <div className='col-span-2 font-poppins'>
        <h1 className='font-semibold text-xl mb-5 mt-20 lg:mt-0 px-5'>JohuNews Home</h1>
        <div className='w-full grid grid-cols-1 row-auto gap-y-10 lg:px-5'>

        {paginatedAyahs.map(newsItem => (
  <HomeNews
    key={newsItem._id}
    author={newsItem.author.name}
    authorImg={newsItem.author.img}
    newsImg={newsItem.image_url}
    title={newsItem.title}
    star={newsItem.rating.number}
    views={newsItem.total_view}
    description={newsItem.details}
    date={newsItem.author.published_date}
  />
))}

                  <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(news.length / itemsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'flex justify-center gap-3 items-center font-poppins text-xs'}
            activeClassName={'bg-transparent border-b-4 border-gray-800 text-white rounded-lg font-medium py-2'}
  pageLinkClassName={'bg-transparent text-gray-800 border border-gray-800 rounded-lg font-medium px-3 py-2'}
  previousLinkClassName={'bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium'}
  nextLinkClassName={'bg-gray-800 text-white lg:px-4 px-3 text-xs lg:text-base py-2 rounded-lg font-medium'}
  disabledClassName={'pointer-events-none opacity-50'}
          />
        </div>
        </div>
        <RightSidebar/>
    </div>
    </div>
  )
}

export default HomeContent