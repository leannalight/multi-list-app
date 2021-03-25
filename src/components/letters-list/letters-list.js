import React from 'react';
import { connect } from 'react-redux';
import { addToLetters } from '../../actions';
import { Item } from '../item';

import './letters-list.css';

const LettersList = ({ items }) => {
    return (
      <div className="letters-list">
       <h5>Letters</h5>

       <ul className="letters-list-item list-group">
        {
          items.items.map((item) => {
            return (
              <li key={item.id} className="letters-list-item">
                <Item item={item} />
              </li>
            );
          })
        }
       </ul>
    </div>
    );
};

const mapStateToProps = ({ items }) => {
  return {
    items
  };
};

export default connect(mapStateToProps, addToLetters)(LettersList);
