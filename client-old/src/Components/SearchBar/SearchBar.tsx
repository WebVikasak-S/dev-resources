import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
const SearchBar: React.FC = () => {
  return (
    <div className="searchBar">
      <SearchIcon fontSize="medium" />
      <input
        type="text"
        placeholder="Search Here"
        className="searchBar_input"
      />
    </div>
  );
};

export default SearchBar;
