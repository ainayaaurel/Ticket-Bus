import {combineReducers} from 'redux';
import Login from './Auth/AuthLogin';
import Routes from './ReducerRoutes';
import Schedules from './ReducerSchedules';
import MyProfile from './ReducerProfil';
import topUp from './ReducerTopUp';
import reservation from './ReducerReservations';

export default combineReducers({
  login: Login,
  routes: Routes,
  schedules: Schedules,
  account: MyProfile,
  topUp: topUp,
  reservation: reservation,
});
