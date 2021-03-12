import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Item from '../item';

import './let-and-num-list.css';

const LetAndNumList = ({ items }) => (
 <div className="let-num-list">
   <h5>Letters and Numbers</h5>
    <ul className="let-num-list-item list-group">
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

export default connect(mapStateToProps, actions)(LetAndNumList);

