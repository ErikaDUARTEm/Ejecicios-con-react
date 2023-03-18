import { createContext, useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import frameWorksList from "../item.js";

export const ItemsContext = createContext([]);

export function ItemsProvider({children}){
    const [item, setItem ] = useState(frameWorksList);
    const {search} = useContext(SearchContext); 

    useEffect(() => {
       if(!search || search === ""){
        setItem(frameWorksList)
        return;
       }
       filterItems(search);
    },[search]);

function filterItems(searchPattern){
    let newItem = filterItemsBySearchPattern(searchPattern);
    setItem(newItem)  
}
function filterItemsBySearchPattern(searchPattern){
    let filterItem = frameWorksList.map((item)=> item.toLowerCase().includes(searchPattern.toLowerCase())? item : null);
    return filterItem;
}

    return (
    <ItemsContext.Provider  value={item}>
        
       {children}
       </ItemsContext.Provider>
    )
}
