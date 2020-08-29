import React from 'react';

// stateless component
function Input(props) {
   return (
        <input
            type="text"
            placeholder="Digite um todo"
            onChange={e => props.onChange(e)}
            value={props.value}
        />
    )
}

export default Input;