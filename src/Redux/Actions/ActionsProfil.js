import config from '../../utils/config';
import axios from 'axios';

export const getMyAccount = () => async (dispatch) => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat(`userdetails/myprofile`),
    );
    dispatch({
      type: 'GET_MY_ACCOUNT',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const updateMyProfile = (picture) => async dispatch => {
//   try {
//     const data = new FormData()
//     data.append('picture', picture)
//     const res = await axios.patch(config.APP_BACKEND.concat(`userdetails/updatepicture/2`), data);
//     dispatch({
//       type: 'UPDATE_MY_PROFILE',
//       payload: res.data.data
//     })

//   } catch (error) {
//     console.log(error)
//   }
// }
