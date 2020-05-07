import config from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
AsyncStorage.getItem('token_user', (error, results) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${results}`;
});

export const getSchedules = (departure_at, date) => async (dispatch) => {
  try {
    const query = `schedules?&search[value]=${departure_at}&date=${date}&sortBy=busses.price`;
    const res = await axios.get(config.APP_BACKEND.concat(query));
    console.log('ini baru', res);
    if (res.data.data) {
      dispatch({
        type: 'GET_SCHEDULES',
        payload: res.data.data,
      });
    } else {
      console.log('Data tidak tersedia');
    }
  } catch (err) {
    console.log(err);
  }
};

export const schedulesDetails = (data) => async (dispatch) => {
  // console.log('ini id', id);
  try {
    // const query = `schedules/${id}`;

    // const res = await axios.get(config.APP_BACKEND.concat(query));

    if (data) {
      dispatch({
        type: 'GET_SCHEDULES_DETAILS',
        payload: data,
      });
    } else {
      console.log('TIDAK ADA DATA');
    }
  } catch (err) {
    console.log(err);
  }
};
