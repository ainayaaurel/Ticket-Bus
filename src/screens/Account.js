import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Header, Avatar, ListItem} from 'react-native-elements';
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
    this.props.getMyAccount();

    this.changeScreenToLogin = () => {
      this.props.navigation.navigate('Login');
    };
    this.changeScreenEditProfile = () => {
      this.props.navigation.navigate('Edit Profile');
    };
    this.changeScreenTopUp = () => {
      this.props.navigation.navigate('Top Up');
    };
  }

  componentDidMount() {
    console.log('ini data akun', this.props.usersdetails);
  }
  render() {
    console.log(this.props.logout);
    return (
      <View>
        <View>
          {/* <Header
            containerStyle={backgroundColor= '#15B105', marginTop= -30}
            centerComponent={text= 'MY ACCOUNT', style={{ color= '#fff'}}
            rightComponent={icon= 'menu', color= '#fff'}
          /> */}
          {/* <View>
            {this.props.usersdetails && this.props.usersdetails.map((v, i) => {
              return (
                <> */}
          <Card style={{height: 80}}>
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              showEditButton
            />
            <Text
              style={{position: 'absolute', marginTop: 15, paddingLeft: 100}}>
              Dinda
            </Text>
            <Text
              style={{position: 'absolute', marginTop: 35, paddingLeft: 100}}>
              Balance : 350000
            </Text>
            <TouchableOpacity
              style={styles.touchedit}
              onPress={this.changeScreenEditProfile}>
              <Text style={styles.textEdit}>EDIT PROFILE</Text>
            </TouchableOpacity>
          </Card>
          {/* </>
              )
            })}
          </View> */}
          <View>
            <Card>
              <TouchableOpacity onPress={this.changeScreenTopUp}>
                {list.map((item, i) => (
                  <ListItem
                    containerStyle={{backgroundColor: '#529B77'}}
                    key={i}
                    title={item.title}
                    leftIcon={{name: item.icon}}
                    chevron
                  />
                ))}
              </TouchableOpacity>
            </Card>
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
  profile: state.account.usersdetails,
});

export default connect(mapStateToProps, {isLogout, getMyAccount})(Account);
