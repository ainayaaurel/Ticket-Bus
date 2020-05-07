import config from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
AsyncStorage.getItem('token_user', (error, results) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${results}`;
});

export const topup = (nominal) => async (dispatch) => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('topup/'), nominal);
    console.log('topup', res);
    if (res.data.data) {
      dispatch({
        type: 'TOP_UP',
        payload: res.data.data,
      });
    } else {
      console.log('Failed Top Up');
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateTopUp = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(
      config.APP_BACKEND.concat(`topup/update/${id}`),
    );
    if (res.data.msg) {
      dispatch({
        type: 'UPDATE_TOPUP',
        payload: res.data.msg,
      });
    } else {
      console.log('Failed Top Up');
    }
  } catch (err) {
    console.log(err);
  }
};
