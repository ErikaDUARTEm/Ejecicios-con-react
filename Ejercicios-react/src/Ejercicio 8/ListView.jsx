import React, { useContext } from 'react';
import { ItemsContext } from './context/ItemsContext';
import './filterList.css';
import SearchInput from './SearchInput';

const ListView = () => {
  let elemnts = useContext(ItemsContext);
    return (
        <>
        <div className='container'>
          <SearchInput/>
          <ul>
          {
            elemnts.map((nombre,index)=> nombre && <li key={index}>{nombre}</li>)
          }
          </ul>
        </div>
        </>
    );
}

export default ListView;
