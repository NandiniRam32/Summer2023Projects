import React from 'react';
import { MdSearch } from 'react-icons/md';
import '../index.css';

const SearchBar = ({ handleSearchNote }) => {
    return(
        <div className="searchBar dark:text-black">
            <MdSearch className="searchBar-icons" size='1.3em' />
            <input style={{width: "100%"}} onChange={(event) => (handleSearchNote(event.target.value))} type="text" placeholder="Type here to search..."/>
        </div>
    )
};

export default SearchBar;