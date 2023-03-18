import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
 
 
    return (
        <>
            <p>Haz hecho clic {count} veces en este botón</p>
            <button onClick={()=> setCount(count+1)}>Incrementar</button>
        </>
    );
}

export default Counter;
