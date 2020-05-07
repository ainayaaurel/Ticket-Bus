import config from '../../utils/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
AsyncStorage.getItem('token_user', (error, results) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${results}`;
});

export const getMyAccount = () => async (dispatch) => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat(`userdetails/myprofile`),
    );
    console.log('kkkkkkkkkkkk', res.data);
    dispatch({
      type: 'GET_MY_ACCOUNT',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`userdetails/`));
    dispatch({
      type: 'GET_ALL_USERS',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePicture = (picture) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append('picture', picture);
    console.log('hhhhhhhhhhhhh', picture);
    const res = await axios.put(
      config.APP_BACKEND.concat(`userdetails/updatepicture`),
      data,
    );
    dispatch({
      type: 'UPDATE_PICTURE',
      // payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = (id, data) => async (dispatch) => {
  try {
    const query = `userdetails`;
    const res = await axios.patch(config.APP_BACKEND.concat(query), data);
    if (res) {
      alert('SUCCESS UPDATE');
    } else {
      alert('FAILED TO UPDATE');
    }
    dispatch({
      type: 'UPDATE_DATA',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
