import React from 'react';
import { connect } from 'react-redux';
import { addLet } from '../../actions';
import { Item } from '../item';

import './letters-list.css';

const LettersList = ({ items }) => {

  const elements = items.items.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="letters-list-item">
        <Item {...itemProps}/>
      </li>
    )
  });

  return (
    <div className="letters-list">
       <h5>Letters</h5>
       <ul className="letters-list-item list-group">
        {elements}
       </ul>
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    items: state
  };
};

export default connect(mapStateToProps, addLet)(LettersList);
