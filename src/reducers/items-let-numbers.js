const itemsLetNumbers = (state = [], action) => {

  switch (action.type) {
      case 'ADD_TO_LETTERS_AND_NUMBERS':
        return [
          ...state,
          {
            id: action.id,
            letNumber: action.letNumber
          }
        ];
      default:
        return state
  }
}

export default itemsLetNumbers;
