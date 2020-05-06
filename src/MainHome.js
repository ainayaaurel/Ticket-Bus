import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/screens/LoginScreen';
import ForgotPassword from '../src/screens/ForgotPassword';
import BottomStack from '../src/screens/BottomStack';
import SelectBus from '../src/screens/SelectBus';
// import Calender from '../src/screens/Calender';
import EditProfile from '../src/screens/EditProfile';
import ChooseChair from '../src/screens/SelectaChair';
import TopUp from '../src/screens/TopUp';
import VerifyCode from '../src/screens/VerifyCode';
import Payment from '../src/screens/Payment';
import RegisterScreen from '../src/screens/RegsiterScreen';
const Stack = createStackNavigator();
import {connect} from 'react-redux';

class MainHome extends Component {
  componentDidMount() {
    console.log('HELL', this.props.login);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.login ? (
            <Stack.Screen
              name="Home"
              component={BottomStack}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="Verification"
            component={VerifyCode}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Select Bus"
            component={SelectBus}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Back"
            component={ChooseChair}
            options={{headerShown: true}}
          />
          {/* <Stack.Screen
            name="Calender"
            component={Calender}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Top Up"
            component={TopUp}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Payment Confirmation"
            component={Payment}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.sudahLogin,
    isRegister: state.login.isRegister,
  };
};

export default connect(mapStateToProps, null)(MainHome);

// const AppNavigator = createSwitchNavigator({
//   AuthLoading: AuthLoadingScreen,
//   App: TabNavigator,
//   Auth: AuthStack,
// });

// const AppContainer = createAppContainer(AppNavigator);

// function App() {
//   return (

//         <AppContainer />

//   );
// }
