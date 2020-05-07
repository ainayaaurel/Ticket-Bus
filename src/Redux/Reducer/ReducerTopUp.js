const initialState = {
  topUp: {},
};

const ReducersTopUp = (state = initialState, action) => {
  switch (action.type) {
    case 'TOP_UP': {
      return {
        ...state,
        topUp: action.payload,
      };
    }
    case 'UPDATE_TOPUP': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default ReducersTopUp;
