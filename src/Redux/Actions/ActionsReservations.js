import axios from 'axios';
import config from '../../utils/config';
import AsyncStorage from '@react-native-community/async-storage';
AsyncStorage.getItem('token_user', (error, results) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${results}`;
});

export const postReservation = (schedulesId, seat) => async (dispatch) => {
  try {
    const data = {
      schedulesId,
      seat,
    };
    const res = await axios.post(
      config.APP_BACKEND.concat(`reservations/order`),
      data,
    );
    console.log('pok aee amee', res);
    if (res.data.msg) {
      dispatch({
        type: 'POST_RESERVATION',
        payload: res.data.msg,
      });
    } else {
      console.log('Failed To Reservation');
    }
  } catch (err) {
    console.log(err);
  }
};

export const getHistory = () => async (dispatch) => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat('reservations/history'),
    );
    if (res.data.data) {
      dispatch({
        type: 'GET_HISTORY',
        payload: res.data.data,
      });
    } else {
      console.log('THERE NO MONEY');
    }
  } catch (error) {
    console.log(error);
  }
};

// export const getReservation = () => async dispatch => {
//   try {

//   }
// }
//  => {
//    try {
//      const res = await axios.get(config.APP_BACKEND.concat())
//    }
//  }
