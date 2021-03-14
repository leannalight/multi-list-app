import React from 'react';

import './item.css';

const Item = ({ text }) => {
  return <span className="item">{ text }</span>
};

const Item1 = ({ text1 }) => {
  return <span className="item">{ text1 }</span>
};

const Item2 = ({ text2 }) => {
  return <span className="item">{ text2 }</span>
};

export {
  Item,
  Item1,
  Item2
}
