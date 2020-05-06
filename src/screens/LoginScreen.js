import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import IconBus from 'react-native-vector-icons/FontAwesome5';
import IconPass from 'react-native-vector-icons/Feather';
import IconEye from 'react-native-vector-icons/Feather';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {isLogin} from '../Redux/Actions/Auth/AuthLogin';
import {connect} from 'react-redux';

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPass: true,
      press: false,
      iconEye: 'eye-off',
    };
    this.submitData = () => {
      this.setState({isLoading: true});
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      console.log(data, 'HALE');
      this.props.isLogin(data);
      // this.props.navigation.navigate('Home')
    };
    this.changeScreenRegister = () => {
      this.props.navigation.navigate('Register');
    };
    this.changeScreenForgot = () => {
      this.props.navigation.navigate('ForgotPassword');
    };

    showPass = () => {
      if (this.state.press === false) {
        this.setState({
          showPass: !this.state.showPass,
          press: !this.state.press,
        });
      } else {
        this.setState({showPass: this.state.showPass, press: this.state.press});
      }
    };
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.parent}>
        <View style={styles.logoContainer}>
          <IconBus name="bus" size={100} color="#000" style={styles.logoicon} />
          <Text style={styles.logotext}>SHUTTLEBUS-ID</Text>
        </View>
        <View style={styles.inputContainer}>
          <IconPass
            name="user"
            size={28}
            color="rgba(255,255,255, 0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({username: username})}
          />
        </View>
        <View style={styles.inputContainer}>
          <IconPass
            name="lock"
            size={28}
            color="rgba(255,255,255, 0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.showPass}
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({password: password})}
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass}>
            <IconEye
              name={this.state.iconEye}
              size={20}
              color="rgba(255,255,255, 0.7)"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity onPress={this.changeScreenForgot}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={this.submitData}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.createacc}>
          <TouchableOpacity onPress={this.changeScreenRegister}>
            <Text style={styles.textCreate}>Don't have account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#15B105',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
    left: 11,
  },
  logoinput: {
    position: 'absolute',
    top: 9,
    left: 37,
  },
  logoicon: {
    alignItems: 'center',
    height: 100,
    textAlign: 'center',
    // marginBottom: 20
  },
  logotext: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  btnEye: {
    position: 'absolute',
    top: 9,
    right: 37,
    marginLeft: 250,
    // marginTop: -50,
    // zIndex: 99
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
  },
  textLogin: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  createacc: {
    marginTop: 20,
    position: 'relative',
  },
  textCreate: {
    fontSize: 13,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  textCreateSignUp: {
    fontSize: 13,
    textDecorationLine: 'underline',
    position: 'relative',
    textAlign: 'center',
    paddingLeft: 200,
    marginTop: -10,
  },
  forgot: {
    marginTop: 10,
    marginLeft: '45%',
    fontSize: 13,
  },
});
const mapStateToProps = (state) => ({
  login: state.login.login,
});

export default connect(mapStateToProps, {isLogin})(Login);

{
  /* <TouchableOpacity style={styles.btnEye}>
            <IconEye name='eye-off' size={20} color='rgba(255,255,255, 0.7)' />
          </TouchableOpacity> */
}
