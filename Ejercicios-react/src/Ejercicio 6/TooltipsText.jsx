import React, { useRef, useState } from 'react';
import Tooltips from './Tooltips';
import './tooltipsText.css';

const TooltipsText = (props) => {
    let [toolTipsDomReact, setToolTipsDomReact] = useState();
    let [showToolTips, setShowToolTips] = useState(false);

    let spanElement = useRef();

    function handleMouseOver (){
   let domData = spanElement.current.getBoundingClientRect();
   setToolTipsDomReact(domData)
   setShowToolTips(true)
   
}

    return (
    <>
        <span 
        className='tooltipsText'
        ref={spanElement} 
        onMouseOver={(e)=> handleMouseOver(e)}
        onMouseLeave={(e) => setShowToolTips(false)}>
         {props.children}
        </span>
       
        {
        <Tooltips domReact={toolTipsDomReact} text={props.Tooltips}/>
        }
    </>

    );

}

export default TooltipsText;
