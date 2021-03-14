import { combineReducers } from 'redux';
import items from './items';
import itemsOne from './items-one';
import itemsTwo from './items-two';

export default combineReducers({
  items,
  itemsOne,
  itemsTwo
});
