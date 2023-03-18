import React from 'react';
import './filterList.css';

const ListView = ({elemnts, funFilterItem}) => {
    return (
        <>
        <div className='container'>
          <h1>Lista de tecnologías</h1>
          <input className='input' type='text' onChange={ ev => funFilterItem(ev.target.value)}/>
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
