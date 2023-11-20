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
           .pagination-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color:rgba(255, 255, 255, 0.40);
            backdrop-filter: blur(10px); 
            box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2); // Add a subtle box shadow
          }
        `}
      </style>
      <div className="pagination-container">
        <ReactPaginate
          className="pagination justify-content-center mt-2 mb-0 pb-2 gap-4"
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
      </div>

    </>
  );
};

export default Pagination;
