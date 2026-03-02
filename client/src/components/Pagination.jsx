const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
}) => {
  return (
    <div className="page-container">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Prev
      </button>

      {[...Array(numberOfPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <span
            key={pageNumber}
            className={`page ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}

      <button
        disabled={currentPage === numberOfPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;