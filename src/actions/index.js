// создаём Action Creators

let itemId = 0;

 export const addItem = text => ({
    type: 'ADD_ITEM',
    id: itemId++,
    text
 });

 export const addNum = text => ({
  type: 'ADD_NUM',
  id: itemId++,
  text: 1
});

export const addLetNum = text => ({
  type: 'ADD_LN',
  id: itemId++,
  text: 2
});
