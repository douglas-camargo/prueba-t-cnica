import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginateProps {
  functionHandleChange: (selected: number) => void;
  totalPages: number;
}

const Paginate: React.FC<PaginateProps> = ({ functionHandleChange, totalPages }) => {
  const [pageOffset, setPageOffset] = useState(0);

  const handlePageChange = (event: { selected: number }) => {
    setPageOffset(event.selected);
    functionHandleChange(event.selected);
  };

  const isFirstPage = pageOffset === 0;
  const isLastPage = pageOffset === totalPages - 1;

  return (
    <>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageClassName='w-16 h-8 items-center flex justify-center bg-[white] border border-[#71889D] text-[#71889D] focus:outline-none focus:shadow-outline-blue active:bg-blue-500 active:text-white'
        pageLinkClassName="w-full h-full flex justify-center items-center"
        previousClassName="w-16 h-8 items-center flex justify-center bg-white border border-[#71889D] text-[#71889D] rounded-tl rounded-bl bg-[#DBDCDE] focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
        previousLinkClassName="w-full h-full flex justify-center items-center"
        nextClassName="w-16 h-8 items-center flex justify-center bg-white border border-[#71889D] text-[#71889D] rounded-tr rounded-br bg-[#DBDCDE] focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
        nextLinkClassName="w-full h-full flex justify-center items-center"
        breakLabel={null}
        pageCount={totalPages}
        marginPagesDisplayed={0}
        pageRangeDisplayed={isFirstPage || isLastPage ? 3 : 2}
        disableInitialCallback={true}
        onPageChange={handlePageChange}
        containerClassName='pagination flex'
        activeClassName='active_paginate'
        breakClassName='break-me'
      />
    </>
  );
};

export default Paginate;
