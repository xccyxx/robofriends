import React from 'react';


const SearchBar = ({ searchChange }) => {
    return (
        <input
            className="input-reset ba b--black-20 pa2 mb2 db center w-50 bg-lightest-blue"
            placeholder="Search..."
            onChange={searchChange}
        />
    )
}

export default SearchBar;