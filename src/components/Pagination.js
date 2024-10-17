import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages === 0) return null; 

  return (
    <div className="flex justify-center mt-8 space-x-2">
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => onPageChange(page + 1)}
          className={`px-4 py-2 rounded ${currentPage === page + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
