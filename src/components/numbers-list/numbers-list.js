import React from 'react';
import { connect } from 'react-redux';
import { addNum } from '../../actions';
import { Item1 } from '../item';

import './numbers-list.css';


const NumbersList = ({ itemsOne }) => {

  const elements = itemsOne.itemsOne.map((itemOne) => {

    const { id, ...itemOneProps } = itemOne;

    return (
      <li key={id} className="numbers-list-item">
        <Item1 {...itemOneProps}/>
      </li>
    )
  });

  return (
    <div className="numbers-list">
       <h5>Numbers</h5>
       <ul className="numbers-list-item list-group">
        {elements}
       </ul>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    itemsOne: state
  };
};

export default connect(mapStateToProps, addNum)(NumbersList);

