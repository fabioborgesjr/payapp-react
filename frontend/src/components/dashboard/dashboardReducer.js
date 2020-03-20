const initialState = { summary: { credit: 0, debt: 0 } };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "BILLING_SUMMARY_FETCHED":
      return { ...state, summary: payload.data };
    default:
      return state;
  }
}
