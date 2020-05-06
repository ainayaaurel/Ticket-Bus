const initialState = {
  sudahLogin: false,
  isLoading: false,
  register: {},
  verification: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        sudahLogin: true,
        isLoading: true,
      };
    }
    case 'IS_LOGOUT': {
      return {
        ...state,
        sudahLogin: false,
        // isLogout: true,
        isLoading: true,
      };
    }
    case 'IS_REGISTER': {
      return {
        ...state,
        register: action.payload,
        isLoading: true,
      };
    }
    case 'IS_VERIFICATION': {
      return {
        ...state,
        verification: action.payload,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
