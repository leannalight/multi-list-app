import React from 'react';

import './item.css';

const Item = ({ text }) => (
  <li className="item">
    { text }
  </li>
);

export default Item;
