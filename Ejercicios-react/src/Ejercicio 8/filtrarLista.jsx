import React from 'react';

import ListView from './ListView';
import './filterList.css';
import { SearchProvider } from './context/SearchContext';
import { ItemsProvider } from './context/ItemsContext';
import ResultCount from './ResultCount';

// componentes de presentacion y componentes contenedores

const FilterListContext = () => {
    
    return (
       <><SearchProvider>
            <div className='list'>
                <ItemsProvider>
                    <ListView/>
                    <ResultCount/>
                </ItemsProvider>
            </div>
       </SearchProvider>
       </>
    );
}

export default FilterListContext;
