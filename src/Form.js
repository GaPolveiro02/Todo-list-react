import React from 'react';
import Button from './Button';
import Input from './Input';

function Form(props) {
  
  return (
    <form type="submit">
      <Input 
       onChange={props.onChange}
      />
      <Button 
       onClick={props.onClick} 
      />
    </form>
  );
}

export default Form;
