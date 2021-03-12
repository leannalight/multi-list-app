import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../item';

import './numbers-list.css';

const NumbersList = ({ items }) => (
  <div className="numbers-list">
    <h5>Numbers</h5>
    <ul className="numbers-list-item list-group">
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

export default connect(mapStateToProps, actions)(NumbersList);

