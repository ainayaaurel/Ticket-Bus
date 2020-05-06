const initialState = {
  usersdetails: [],
  isLoading: true,
};

const myAccountReducer = (state = initialState, action) => {
  console.log('myAkun', action.type);
  console.log(action);
  switch (action.type) {
    case 'GET_MY_ACCOUNT': {
      return {
        ...state,
        isLoading: false,
        usersdetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default myAccountReducer;
