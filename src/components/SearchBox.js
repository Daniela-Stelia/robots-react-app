import React from "react";

const SearchBox = (props) =>{

    return (
        <div className="pa2">
        <input
            className="searchfield br3"
            type = 'search'
            placeholder = 'search robots'
            onChange = {props.searchChange}
        />
        </div>
    )
}

export default SearchBox;