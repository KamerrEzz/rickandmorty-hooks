import React from 'react';

const characterSearh = ({search, searchInput, handleSearch}) => {
    return (
        <React.Fragment>
            <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
        </React.Fragment>
    );
};

export default characterSearh;