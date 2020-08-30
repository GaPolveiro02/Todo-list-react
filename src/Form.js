import React from 'react';
import Button from './Button';
import Input from './Input';

function Form(props) {
  
  return (
    <form type="submit">
      <Input 
       onChange={props.onChange}
       value={props.value}
      />
      <Button 
       text={props.text}
       onClick={props.onClick} 
      />
    </form>
  );
}

export default Form;
