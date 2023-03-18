import React, {useContext} from 'react';
import { SearchContext } from './context/SearchContext';

const SearchInput = () => {
    const {setSearch} = useContext(SearchContext);
 
    return (
        <div>
            <h1>Lista de tecnologías</h1>
            <input className='input' type='text' onChange={ ev => setSearch(ev.target.value)}/>
        </div>
    );
}

export default SearchInput;
