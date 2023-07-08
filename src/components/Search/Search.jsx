import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input
        type="text"
        className={styles.search}
        placeholder={placeholder}
      ></input>
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
