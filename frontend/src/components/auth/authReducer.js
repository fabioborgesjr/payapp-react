const USER_KEY = "MY_MONEY_USER";

const userFromStorage = localStorage.getItem(USER_KEY);

const initialState = {
  user: JSON.parse(userFromStorage),
  validToken: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOKEN_VALIDATED":
      if (payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(USER_KEY);
        return { ...state, validToken: false, user: null };
      }
    case "USER_FETCHED":
      localStorage.setItem(USER_KEY, JSON.stringify(payload));

      return { ...state, user: payload, validToken: true };
    default:
      return state;
  }
};
