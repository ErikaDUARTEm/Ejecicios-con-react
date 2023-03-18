import React, { useState } from 'react';
import frameWorksList from './item';
import ListView from './ListView';
import './filterList.css';

// componentes de presentacion y componentes contenedores

const FilterList = () => {
    
    const [item,setItem ] = useState(frameWorksList);

function filterItems(searchPattern){
   if(searchPattern === ''){
    setItem(frameWorksList);
}else{
    let newItem = filterItemsBySearchPattern(searchPattern);
    setItem(newItem)  
}
}
function filterItemsBySearchPattern(searchPattern){
    let filterItem = frameWorksList.map((item)=> item.toLowerCase().includes(searchPattern.toLowerCase())? item : null);
    return filterItem;
}
    return (
       <>
        <div className='list'>
        <ListView elemnts={item} funFilterItem={filterItems}/>
        </div>
       </>
    );
}

export default FilterList;
