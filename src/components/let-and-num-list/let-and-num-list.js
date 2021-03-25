import React from 'react';
import { connect } from 'react-redux';
import { addToLetNumbers } from '../../actions';
import { ItemLetNumber } from '../item';

import './let-and-num-list.css';


const LetAndNumList = ({ itemsLetNumbers }) => {

  const elements = itemsLetNumbers.itemsLetNumbers.map((itemLetNumber) => {

    const { id, ...itemLetNumberProps } = itemLetNumber;

    return (
      <li key={id} className="let-num-list-item">
        <ItemLetNumber {...itemLetNumberProps}/>
      </li>
    )
  });

  return (
    <div className="let-num-list">
       <h5>Letters and Numbers</h5>
       <ul className="let-num-list-item list-group">
        {elements}
       </ul>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    itemsLetNumbers : state
  };
};

export default connect(mapStateToProps, addToLetNumbers)(LetAndNumList);

