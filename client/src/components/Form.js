import React, {Component} from 'react';

const Form = (props) => {
  const {handleSubmit,changeTodo, todo} = props;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" onChange={changeTodo} value={todo} />
      <input type="submit" value="new todo" />
    </form>
  )
}

export default Form;
