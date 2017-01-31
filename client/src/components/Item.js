import React, {Component} from 'react';

function Item(props) {
  const {index, item, handleClick} = props;
  return (
    <li key={index} onClick={handleClick.bind(null, item.id)}>
      <p name={item.id}>{item.name}</p>
    </li>
  )
}

export default Item;
