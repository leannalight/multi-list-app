const initialState = {
  items: []
};

// reducer
const items = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_LETTERS':

    const itemIndex = state.items.findIndex(({ text }) => text === action.text);
    const item = state.items[itemIndex];

    let newItem;

    if (item) {
      newItem = {
        ...item,
        count: item.count + 1
      };
    } else {
      newItem = {
        id: action.id,
        text: action.text,
        count: 1
      };
    };

    if (itemIndex < 0) {
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      };
    } else {
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          newItem,
          ...state.items.slice(itemIndex + 1)
        ]
      };
    }

    default:
      return state;
  };
};

export default items;
