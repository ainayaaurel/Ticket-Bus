import config from '../../utils/config';
import axios from 'axios';

export const transaction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      config.APP_BACKEND.concat('reservations/order'),
    );
    console.log('ini schedules', res);
    if (res.data.msg) {
      dispatch({
        type: 'GET_SCHEDULES',
        payload: res.data.msg,
      });
    } else {
      console.log('Data t');
    }
  } catch (err) {
    console.log(err);
  }
};
