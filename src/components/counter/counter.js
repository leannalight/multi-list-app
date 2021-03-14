import React from 'react';
import { connect } from 'react-redux';
import { inc } from '../../actions';
import './counter.css';

const Counter = ({ counter }) => {
  return <span className="counter jumbotron">{counter}</span>
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, inc)(Counter);
