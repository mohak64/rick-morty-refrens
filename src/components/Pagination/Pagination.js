import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobileConfig = {
    marginPagesDisplayed: 0,
    pageRangeDisplayed: 1,
  };

  const desktopConfig = {
    marginPagesDisplayed: width < 576 ? 1 : 2,
    pageRangeDisplayed: width < 576 ? 1 : 2,
  };

  const paginationConfig = width < 576 ? mobileConfig : desktopConfig;

  return (
    <>
      <style jsx global>
        {`
          .a {
            color: white !important;
          }
          .pagination {
            .page-item {
              .page-link {
                color: white !important;
                background-color: black !important;
                border-color: black !important;
              }

              &.active.page-item {
                .page-link {
                  background-color: black !important;
                  color: white !important;
                }
              }

              &.prev.page-item,
              &.next.page-item {
                .page-link {
                  background-color: black !important;
                  color: white !important;
                }
              }
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center mt-4 mb-0 pb-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-light fs-5 prev"
        nextClassName="btn btn-light fs-5 next"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        {...paginationConfig}
      />
    </>
  );
};

export default Pagination;
