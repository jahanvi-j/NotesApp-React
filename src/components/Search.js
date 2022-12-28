import React from "react";
import { MdSearch } from 'react-icons/md';


const Search =({handleSearchNote})=> {
    return <div className="search">
        <MdSearch className="search-icons" size = "1.3cm" />
        <input 
            onChange= {(event) => handleSearchNote(event.target.value)
            }
            type="text" 
            placeholder="type to search..."></input>
    </div>;
};

export default Search;


// capture user input value, filter notes on the basis of it