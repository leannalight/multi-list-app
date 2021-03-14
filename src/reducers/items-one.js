const itemsOne = (state = [], action) => {

  switch (action.type) {
      case 'ADD_NUM':
      return [
        ...state,
        {
          id: action.id,
          text1: action.text1
        }
      ];
      default:
        return state
  }
}

export default itemsOne;
