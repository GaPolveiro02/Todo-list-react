import React from 'react';
import Button from './Button';
import Input from './Input';

function Form(props) {
  return (
    <form type="submit">
      <Input value={props.value} onChange={props.onChange} />
      <Button text="Add" onClick={props.onClick} />
    </form>
  );
}

export default Form;
