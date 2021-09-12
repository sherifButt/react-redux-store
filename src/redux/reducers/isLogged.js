export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = true);
    case "SIGN_OUT":
      return (state = false);
    case "TOGGLE_LOGIN":
      return (state = !state);
    default:
      return state;
  }
};


