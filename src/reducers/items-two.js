const itemsTwo = (state = [], action) => {

  switch (action.type) {
      case 'ADD_LN':
        return [
          ...state,
          {
            id: action.id,
            text2: action.text2
          }
        ];
      default:
        return state
  }
}

export default itemsTwo;
