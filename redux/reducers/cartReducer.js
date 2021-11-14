let defaultState = {
  selectedItems: { items: [], restourantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restourantName: action.payload.restourantName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restourantName: action.payload.restourantName,
        };
      }
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
