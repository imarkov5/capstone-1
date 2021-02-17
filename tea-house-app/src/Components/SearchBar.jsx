import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    return (
        <input
        style={{width: "20rem", padding: "0.5rem"}}
        key="word"
        value={keyword}
        placeholder={"Search..."}
        onChange={(e) => setKeyword(e.target.value)}
        />
    )
}
export default SearchBar;