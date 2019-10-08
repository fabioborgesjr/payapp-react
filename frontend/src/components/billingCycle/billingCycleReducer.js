const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "BILLING_CYCLES_FETCHED":
      return {
        ...state,
        list: payload
      };

    default:
      return state;
  }
};
