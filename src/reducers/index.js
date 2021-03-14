import { combineReducers } from 'redux';
import items from './items';
import itemsOne from './items-one';
import itemsTwo from './items-two';
import itemCounter from './item-counter';

export default combineReducers({
  items,
  itemsOne,
  itemsTwo,
  itemCounter
});
