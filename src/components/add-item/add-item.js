import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

import './add-item.css';

const AddItem = ({ dispatch }) => {
  let input

  return (
    <div className="add-item">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        dispatch (addItem(input.value))
        input.value = ''
      }}>

        <input placeholder="type text"
                ref={node => input = node} />
        <button type="submit"
                className="btn btn-primary btn-sm">
          Enter
        </button>
      </form>
    </div>
  );
};

export default connect()(AddItem);
