import React from 'react';
import { connect } from 'react-redux';
import { addToNumbers } from '../../actions';
import { ItemNumber } from '../item';

import './numbers-list.css';


const NumbersList = ({ itemsNumbers }) => {

  const elements = itemsNumbers.itemsNumbers.map((itemNumber) => {

    const { id, ...itemNumberProps } = itemNumber;

    return (
      <li key={id} className="numbers-list-item">
        <ItemNumber {...itemNumberProps}/>
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
    itemsNumbers: state
  };
};

export default connect(mapStateToProps, addToNumbers)(NumbersList);

