import React, { useState, useEffect } from 'react';

const Timer = () => {

    const [targetSeconds, setTargetSeconds] = useState(null);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

useEffect(() => {

    if(targetSeconds === null) return;
    setElapsedSeconds(0);

    let interval = setInterval(()=>{
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds+1)
    }, 1000);
    return ()=>{
        clearInterval(interval);
    }
}, [targetSeconds]);


function parseForm(ev){
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds));
}
if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
    return(
        <>
        <p>Se acabo el tiempo</p>
        <button onClick={()=> setTargetSeconds(null)}>Reiniciar</button>
        </>

    )
}
if(targetSeconds !== null){
    return(
        <p>Soy un conteo hasta el {targetSeconds} y han transcurridos {elapsedSeconds}</p>
    )
}

    return (
        <>
            <h1>¿Cuantos segundos quieres mostrar?</h1>
            <form action='#' onSubmit={ev => parseForm(ev)}>
                <input type='number' name='seconds'/>
                <button>Iniciar</button>
            </form>
        </>
    );
}

export default Timer;
