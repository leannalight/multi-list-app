const items = (state = [], action) => {

  switch (action.type) {
      case 'ADD_LET':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
      default:
        return state
  }
}

export default items;
