import React from 'react';


function Button(props) {
   return ( 
    <button 
      onClick={e => props.onClick(e)}
    >
      Adicionar 
    </button>
    )
}

export default Button;