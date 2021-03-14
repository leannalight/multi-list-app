import React from 'react';
import { connect } from 'react-redux';
import { addLet, addNum, addLetNum } from '../../actions';

import './add-item.css';

const AddItem = ({ dispatch }) => {

  let input

// функция с логикой для ввода данных
  const onSubmit = (e) => {

    e.preventDefault();

    if (!input.value.trim()) {
      return
    }

    if (/(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))/.test(input.value)) {
      dispatch (addLetNum(input.value));
    }
    if (/^[a-zA-Z]*$/.test(input.value)) {
        dispatch (addLet(input.value));
    }
    if (/^\d+$/.test(input.value)) {
        dispatch (addNum(input.value));
    }

    input.value = ''

  }

  return (
    <div className="add-item">
      <form onSubmit={onSubmit}>

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
