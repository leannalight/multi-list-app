const items = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          counter: false
        }
      ];
      case 'ADD_NUM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          counter: false
        }
      ];
      case 'ADD_LN':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            counter: false
          }
        ];
      default:
        return state
  }
}

export default items;
