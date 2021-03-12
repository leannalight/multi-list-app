import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../item';

import './letters-list.css';

const LettersList = ({ items }) => (
 <div className="letters-list">
    <h5>Letters</h5>
    <ul className="letters-list-item list-group">
      {items.map(item =>
        <Item
            key={item.id}
            {...item} />
      )}
    </ul>
 </div>
);

const mapStateToProps = (state) => {
  return {
    items: state
  };
};

export default connect(mapStateToProps, actions)(LettersList);
