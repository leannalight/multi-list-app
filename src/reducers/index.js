import { combineReducers } from 'redux';
import items from './items';
import itemsNumbers from './items-numbers';
import itemsLetNumbers from './items-let-numbers';

export default combineReducers({
  items,
  itemsNumbers,
  itemsLetNumbers
});
