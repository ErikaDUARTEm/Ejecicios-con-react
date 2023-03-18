import React from 'react';
import Avatar from './assets/Avatar.jpg';
import './presentationCard.css';

const PresentationCard = () => {
    let name= 'Erika';

    return (
        <>
        <div className='presentation-card'>
          <h1>
            Hola, soy {name}
          </h1>
          <p>hola desde el primer componente, estoy aprendiendo React</p> 
          <img src={Avatar} alt='Avatar' className='Avatar'/>
        </div>
           
        </>
    );
}

export default PresentationCard;
