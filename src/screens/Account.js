import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Avatar, ListItem} from 'react-native-elements';
import IconLogout from 'react-native-vector-icons/AntDesign';
import {isLogout} from '../Redux/Actions/Auth/AuthLogin';
import {getMyAccount} from '../Redux/Actions/ActionsProfil';
import {connect} from 'react-redux';

const list = [
  {
    title: 'Top-Up',
    icon: 'payment',
  },
];

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdetails: [],
    };

    this.changeScreenToLogin = () => {
      this.props.navigation.navigate('Login');
    };
    this.changeScreenEditProfile = () => {
      this.props.navigation.navigate('Edit Profile');
    };
    this.changeScreenTopUp = () => {
      this.props.navigation.navigate('Top Up');
    };
    this.changeScreenToUploadPhoto = () => {
      this.props.navigation.navigate('Update Photo');
    };
  }

  componentDidMount() {
    // this.props.getMyAccount();
    console.log('ini data akun', this.props.usersdetails);
  }
  render() {
    console.log(this.props.logout);
    return (
      <View>
        <View>
          <Card style={{height: 400}}>
            <Avatar
              size="large"
              rounded
              onPress={() => {
                this.props.navigation.navigate('Update Photo');
              }}
              containerStyle={{alignSelf: 'center'}}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              showEditButton
            />

            <View>
              <Text style={{marginTop: 15, paddingLeft: 100}}>
                {' '}
                Name :
                {this.props.profile.usersdetails &&
                  this.props.profile.usersdetails.name}
              </Text>
              <Text style={{marginTop: 10, paddingLeft: 100}}>
                Balance :
                {this.props.profile.usersdetails &&
                  this.props.profile.usersdetails.balance}
              </Text>
              <TouchableOpacity
                style={styles.touchedit}
                onPress={this.changeScreenEditProfile}>
                <Text style={styles.textEdit}>EDIT PROFILE</Text>
              </TouchableOpacity>
            </View>
          </Card>

          <View>
            <TouchableOpacity onPress={() => this.props.isLogout({})}>
              <IconLogout
                name="logout"
                size={30}
                color="black"
                style={styles.IconLogout}
              />
              <Text style={{fontSize: 15, textAlign: 'center', marginTop: 10}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchedit: {
    marginTop: 20,
  },
  textEdit: {
    color: '#569248',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  IconLogout: {
    textAlign: 'center',
    marginTop: 50,
  },
});

const mapStateToProps = (state) => ({
  logout: state.login.sudahLogin,
  profile: state.account,
});

export default connect(mapStateToProps, {isLogout, getMyAccount})(Account);
