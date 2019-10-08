const initialState = {
  selected: "",
  visible: {}
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case "TAB_SELECTED":
      return {
        ...state, selected: payload
      };

    case "TAB_SHOWED":
      return {
        ...state, visible: payload
      };

    default:
      return state;
  }
};