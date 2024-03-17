import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBox = (props) => {
    return(
        <div className='search  flex justify-between px-5 py-2 bg-gray-100 rounded'>
            <input
             className='bg-transparent outline-0' 
             value ={props.value}
             onChange={(event) => props.setSearchValue(event.target.value)}
             placeholder='Type to search'></input>
            <button  ><CiSearch/></button>
          </div>
        
    )
}

export default SearchBox;