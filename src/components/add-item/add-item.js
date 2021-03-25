import React from 'react';
import { connect } from 'react-redux';
import { addToLetters, addToNumbers, addToLetNumbers } from '../../actions';

import './add-item.css';

const AddItem = ({ dispatch }) => {

  let input
// функция с логикой для ввода данных
  const handleSubmit = (e) => {

    e.preventDefault();

    if (!input.value.trim()) {
      return
    }

    if (/(([a-zа-яё]+\d+)|(\d+[a-zа-яё]+))/.test(input.value)) {
      dispatch (addToLetNumbers(input.value));
    }

    if (/^[a-zа-яё]*$/.test(input.value)) {
      dispatch (addToLetters(input.value));
  }

    if (/^\d+$/.test(input.value)) {
        dispatch (addToNumbers(input.value));
    }

    input.value = ''

  }

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>

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
