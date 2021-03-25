const itemsNumbers = (state = [], action) => {

  switch (action.type) {
      case 'ADD_TO_NUMBERS':
      return [
        ...state,
        {
          id: action.id,
          number: action.number
        }
      ];
      default:
        return state
  }
}

export default itemsNumbers;
