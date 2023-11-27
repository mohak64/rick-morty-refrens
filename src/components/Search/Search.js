// import React from "react";
// import styles from "./Search.module.scss";

// const Search = ({ setSearch, updatePageNumber }) => {
//   let searchBtn = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <form
//       className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
//     >
//       <input
//         onChange={(e) => {
//           updatePageNumber(1);
//           setSearch(e.target.value);
//         }}
//         placeholder="Search for characters"
//         className={styles.input}
//         type="text"
//       />
//       <button
//         onClick={searchBtn}
//         className={`${styles.btn} btn btn-primary fs-5`}
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default Search;
import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      updatePageNumber(1);
      setSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, setSearch, updatePageNumber]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={handleInputChange}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
