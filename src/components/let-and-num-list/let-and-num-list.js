import React from 'react';
import { connect } from 'react-redux';
import { addLetNum } from '../../actions';
import { Item2 } from '../item';

import './let-and-num-list.css';


const LetAndNumList = ({ itemsTwo }) => {

  const elements = itemsTwo.itemsTwo.map((itemTwo) => {

    const { id, ...itemTwoProps } = itemTwo;

    return (
      <li key={id} className="let-num-list-item">
        <Item2 {...itemTwoProps}/>
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
    itemsTwo: state
  };
};

export default connect(mapStateToProps, addLetNum)(LetAndNumList);

