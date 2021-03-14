// создаём Action Creators

let itemId = 0;

 export const addLet = (text) => ({
    type: 'ADD_LET',
    id: itemId++,
    text
  });

 export const addNum = (text1) => ({
  type: 'ADD_NUM',
  id: itemId++,
  text1
});

export const addLetNum = (text2) => ({
  type: 'ADD_LN',
  id: itemId++,
  text2
});
