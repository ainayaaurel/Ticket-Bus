import config from '../../utils/config';
import axios from 'axios';

export const getRoutes = () => async (dispatch) => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('routes'));
    let routes = res.data.data.map((data, index) => ({
      Id: index,
      Name: `${data.departure_at} - ${data.arrival_at}`,
      Value: data.departure_at,
    }));
    console.log('BUBGGGGGG', routes);
    if (res.data.data) {
      dispatch({
        type: 'GET_ROUTES',
        payload: routes,
      });
    } else {
      console.log('data tidak ada');
    }
  } catch (err) {
    console.log(err);
  }
};
