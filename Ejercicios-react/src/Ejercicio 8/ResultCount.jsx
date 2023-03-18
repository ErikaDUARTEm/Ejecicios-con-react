import {useContext} from 'react';
import { ItemsContext } from './context/ItemsContext';
import { SearchContext } from './context/SearchContext';

const ResultCount = () => {
    const elemnts = useContext(ItemsContext);
    const {search} = useContext(SearchContext);
    return (
        <div>
<p>Se encontraron { elemnts.filter(el => !!el).length} elementos para la búsqueda '{search}'</p>
        </div>
    );
}

export default ResultCount;
