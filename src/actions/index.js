// создаём Action Creators

let itemId = 0;
//let countWord = 0;

 export const addToLetters = (text, count) => {
    return {
    type: 'ADD_TO_LETTERS',
    id: itemId++,
    text,
    payload: count
    }
  };

 export const addToNumbers = (number) => {
  return {
    type: 'ADD_TO_NUMBERS',
    id: itemId++,
    number
  };
};

export const addToLetNumbers = (letNumber) => {
  return {
    type: 'ADD_TO_LETTERS_AND_NUMBERS',
    id: itemId++,
    letNumber
  }
};
