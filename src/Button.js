import React from 'react';


function Button(props) {
   return ( 
    <button 
      onClick={e => props.onClick(e)}
    >
     {props.text}
    </button>
    )
}

export default Button;