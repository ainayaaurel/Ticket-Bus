import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {isRegister} from '../Redux/Actions/Auth/AuthLogin';

// var radio_props = [
//   { label: 'Male', value: 0 },
//   { label: 'Female', value: 1 }
// ];
const {width: WIDTH} = Dimensions.get('window');
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      gender: '',
      address: '',
      phone: '',
      email: '',
    };
    this.submitData = async () => {
      this.setState({isLoading: true});
      const data = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        gender: this.state.gender,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
      };
      console.log(data, 'ini daata register');
      await this.props.isRegister(data);
      this.props.navigation.navigate('Verification');
      // this.changeScreenToVerify = () => {
      //   this.props.navigation.navigate('Verification')
      // }
    };
    this.changeScreenLogin = () => {
      this.props.navigation.navigate('Login');
    };
  }
  render() {
    // console.log('hai', this.props.isRegister)
    console.disableYellowBox = true;
    return (
      <ScrollView>
        <View style={styles.parent}>
          <View>
            <Text style={styles.title}>Create your account</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your username"
              onChangeText={(username) => this.setState({username: username})}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your password"
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              onChangeText={(name) => this.setState({name: name})}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your gender (Male/Female)"
              onChangeText={(gender) => this.setState({gender: gender})}
            />
            {/* <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => { this.setState({ value: value }) }}
            /> */}
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your address"
              onChangeText={(address) => this.setState({address: address})}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your phone"
              onChangeText={(phone) => this.setState({phone: phone})}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Your email"
              onChangeText={(email) => this.setState({email: email})}
            />
          </View>
          <TouchableOpacity style={styles.btnSignUp} onPress={this.submitData}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.login}>
              <Text style={styles.textLogIn} onPress={this.changeScreenLogin}>
                Already have an account yet? Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: WIDTH - 65,
    height: 45,
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15,
  },
  inputgender: {
    width: WIDTH - 65,
    height: 45,
    fontSize: 16,
    color: 'black',
    // borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 15,
  },
  btnSignUp: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  textSignUp: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textLogIn: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  login: {
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({
  register: state.login.isRegister,
});

export default connect(mapStateToProps, {isRegister})(RegisterScreen);
