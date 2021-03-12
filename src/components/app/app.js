import React from 'react';
import AddItem from '../add-item';
import LettersList from '../letters-list';
import NumbersList from '../numbers-list';
import LetAndNumList from '../let-and-num-list';

import './app.css';

const App = () => {

  return (
    <div className="app">
      <AddItem />
      <LettersList />
      <NumbersList />
      <LetAndNumList />
    </div>
  );
};

export default App;
