const initialState = {
  items: []
};

// функция обновления массива
const updateItems = (items, item, idx) => {

  if (idx === -1) {
    return [
      ...items,
      item
    ];
  }

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1)
  ];
};

// функция обновления элемента списка
const updateItem = (action, item = {}) => {

  const {
    id = action.id,
    text = action.text,
    count = 0 } = item;

  return {
    id,
    text,
    count: count + 1
  }
}

// reducer
const items = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_LETTERS':

    const itemIndex = state.items.findIndex(({ text }) => text === action.text);
    const item = state.items[itemIndex];

    const newItem = updateItem(action, item);
    return {
      ...state,
      items: updateItems(state.items, newItem, itemIndex)
    };

    default:
      return state;
  };
};

export default items;
