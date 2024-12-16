import React from "react";

function Pagination({
  totalItems,
  itemPerPage,
  currentPage,
  handlePageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div>
      <nav aria-label="Page navigation example" className="mt-6">
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-center -space-x-px dark:text-gray-200">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-s-lg ${
                currentPage === 1
                  ? "text-gray-300  cursor-not-allowed"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 "
              }`}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 border ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 "
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-e-lg ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 "
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
