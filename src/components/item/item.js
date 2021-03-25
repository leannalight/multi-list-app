import React from 'react';
import './item.css';

const Item = ({ item }) => {
  const { text, count } = item;
  return (
  <div className="d-flex">
    <span className="item-text">{ text }</span>
    <span className="item-count">{ count }</span>
  </div>
  );
};

const ItemNumber = ({ number }) => {
  return <span className="item">{ number }</span>
};

const ItemLetNumber = ({ letNumber }) => {
  return <span className="item">{ letNumber }</span>
};

export {
  Item,
  ItemNumber,
  ItemLetNumber
}
