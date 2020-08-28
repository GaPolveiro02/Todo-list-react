import React from 'react';

// stateless component
function Input(props) {
    return <input
                type="text"
                placeholder="Digite um todo"
                value={props.value}
                onChange={e => props.onChange(e)}
            />
}

export default Input;