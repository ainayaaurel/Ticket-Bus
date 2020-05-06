import config from '../../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

export const isLogin = (data) => async (dispatch) => {
  try {
    const login = await axios.post(
      config.APP_BACKEND.concat('auth/login'),
      data,
    );
    // console.log('ini login', login.data.token)
    if (login.data.token) {
      AsyncStorage.setItem('token_user', login.data.token);
      dispatch({
        type: 'IS_LOGIN',
        payload: login.data,
      });
    } else {
      ToastAndroid.show('Wrong Username or Password', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log(error);
  }
};

export const isLogout = () => {
  AsyncStorage.removeItem('token_user');
  return {
    type: 'IS_LOGOUT',
  };
};

export const isRegister = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      config.APP_BACKEND.concat('auth/register'),
      data,
    );
    console.log('ini register', res.data.success);
    if (res.data.success) {
      dispatch({
        type: 'IS_REGISTER',
        payload: res.data.success,
      });
    } else {
      ToastAndroid.show('Register Failed', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log(error);
  }
};

export const isVerification = (data) => async (dispatch) => {
  const username = data.username;
  const code = data.code;
  try {
    const query = `auth/verify?username=${username}&code=${code}`;
    console.log(query);
    const res = await axios.get(config.APP_BACKEND.concat(query));
    if (res.data.success) {
      dispatch({
        type: 'IS_VERIFICATION',
        payload: res.data.success,
      });
    } else {
      ToastAndroid.show('Verification Failed', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log(error);
  }
};
