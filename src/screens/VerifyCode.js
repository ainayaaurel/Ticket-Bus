import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import IconLock from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {isVerification} from '../Redux/Actions/Auth/AuthLogin';

const {width: WIDTH} = Dimensions.get('window');
class VerifyCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      code: 0,
    };
    this.submitData = async () => {
      this, this.setState({isLoading: true});
      const data = {
        username: this.state.username,
        code: this.state.code,
      };
      await this.props.isVerification(data);
      this.props.navigation.navigate('Login');
    };
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.logoContainer}>
          <Text style={styles.textForgot}>Verification Account</Text>
          <Text style={styles.textDesc}>
            Check your email to verification account and enter the code below
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="username"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({username: username})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Code"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(code) => this.setState({code: code})}
          />
        </View>
        <View style={styles.btnReset}>
          <TouchableOpacity onPress={this.submitData}>
            <Text style={styles.textReset}>SEND CODE</Text>
          </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  textForgot: {
    fontSize: 20,
    color: 'black',
  },
  textDesc: {
    fontSize: 15,
    color: '#515560',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
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
    marginTop: 20,
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
});

const mapStateToProps = (state) => ({
  verification: state.login.isVerification,
});

export default connect(mapStateToProps, {isVerification})(VerifyCode);

// onPress={() => alert('Verification Succes')}
