import React from 'react';
//import Counter from '../counter';
import './item.css';

const Item = ({ text, items }) => {

/* функция подсчёта одинаковых значений

 const result = [...items.reduce( (mp, o) => {

   if (!mp.has(o.text)) mp.set(o.text, {...o, count: 0 });
   mp.get(o.text).count++;
   return mp;
 }, new Map()).values()];

 console.log(result);

*/
  return (
  <div className="d-flex">
    <span className="item">{ text }</span>
    <span></span>
  </div>
  );
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
