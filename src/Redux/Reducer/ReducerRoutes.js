const initState = {
  routes: [],
};

const ReducerRoutes = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ROUTES': {
      return {
        ...state,
        routes: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ReducerRoutes;
