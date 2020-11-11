const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER": {
      return { ...state, isAuth: action.isAuth};
    }

    default:
      return state;
  }
};

export const actionsAuth = {
  setAuth: (isAuth) => {
    return {
      type: "AUTH_USER",
      isAuth
    };
  },
};

export default authReducer;
