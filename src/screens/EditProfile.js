import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window');
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.changeScreenLogin = () => {
      this.props.navigation.navigate('Edit Profile');
    };
    this.changeScreenToAccount = () => {
      this, props.navigation.navigate('Account');
    };
  }
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.title}>You can change personal data in here</Text>
        </View>
        <View>
          <Text style={styles.text}>Name Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            underlineColorAndroid="#569248"
          />
        </View>
        <View>
          <Text style={styles.text}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            underlineColorAndroid="#569248"
          />
        </View>
        <View>
          <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            underlineColorAndroid="#569248"
          />
        </View>
        <View>
          <Text style={styles.text}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            underlineColorAndroid="#569248"
          />
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            underlineColorAndroid="#569248"
          />
        </View>
        <TouchableOpacity
          style={styles.btnSignUp}
          onPress={this.changeScreenToAccount}>
          <Text style={styles.textSave}>SAVE</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: WIDTH - 65,
    height: 40,
    fontSize: 15,
    color: 'black',
    marginBottom: 8,
  },
  btnSignUp: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  textSave: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  textLogIn: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  login: {
    marginTop: 20,
  },
  text: {
    color: '#569248',
    fontFamily: 'sans- serif',
  },
});
