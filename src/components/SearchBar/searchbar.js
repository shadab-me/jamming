import React from 'react';
import './searchbar.css';
const SearchBar = function(){
    return(
        <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" />
    <button claasName="SearchButton">SEARCH</button>
  </div>
  )
}
export default SearchBar;