const initialState = {
  schedules: [],
  schedulesDetails: [],
};

const ReducersSchedules = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULES': {
      const newSchedules = [...state.schedules, action.payload];
      return {
        ...state,
        schedules: action.payload,
      };
    }
    case 'GET_SCHEDULES_DETAILS': {
      const newDetailsSchedules = [...state.schedulesDetails, action.payload];
      return {
        ...state,
        schedulesDetails: action.payload,
      };
    }
    default:
      return state;
  }
};
export default ReducersSchedules;
