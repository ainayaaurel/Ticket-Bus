const initialState = {
  reservation: {},
  data: [],
};

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_RESERVATION': {
      return {
        ...state,

        reservation: action.payload,
      };
    }
    case 'GET_HISTORY': {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reservation;
