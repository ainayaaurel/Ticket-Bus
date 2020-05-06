import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import IconLock from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.changeScreenRegister = () => {
      this.props.navigation.navigate('Register');
    };
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.logoContainer}>
          <IconLock name="lock1" size={60} color="rgb(244,247,247)" />
          <Text style={styles.textForgot}>Forgot Password?</Text>
          <Text style={styles.textDesc}>
            We just need your registered email address to send you password
            reset
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="user"
            size={25}
            color="rgba(255,255,255, 0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="E-mail address"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.btnReset}>
          <TouchableOpacity>
            <Text style={styles.textReset}>RESET PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={styles.textDesc}>DON'T HAVE AN ACCOUNT?</Text>
          <Text style={styles.textRegister} onPress={this.changeScreenRegister}>
            REGISTER
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(43,45,56)',
  },
  logoContainer: {
    alignItems: 'center',
  },
  textForgot: {
    fontSize: 20,
    color: '#fff',
  },
  textDesc: {
    fontSize: 15,
    color: '#515560',
    textAlign: 'center',
  },
  textInput: {
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  inputContainer: {
    position: 'relative',
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 7,
    left: 11,
  },
  btnReset: {
    width: WIDTH - 55,
    height: 45,
    backgroundColor: '#58D43E',
    justifyContent: 'center',
    marginTop: 20,
  },
  textReset: {
    textAlign: 'center',
    color: '#fff',
  },
  textRegister: {
    fontSize: 17,
    textAlign: 'center',
    color: '#F3EEF4',
    fontWeight: 'bold',
  },
  register: {
    position: 'absolute',
    bottom: 20,
  },
});
