import React, {Component} from 'react';
import {Card, Button, Icon} from 'react-native-elements';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {topup, updateTopUp} from '../Redux/Actions/ActionsTopUp';
import {connect} from 'react-redux';

class TopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nominal: '',
    };
    this.changeScreenToAccount = () => {
      this.props.navigation.navigate('Account');
    };
  }

  onSubmit = () => {
    const data = {
      nominal: this.state.nominal,
    };
    this.props.topup(data);
    this.props.updateTopUp(this.props.route.params.id);
    this.props.navigation.navigate('PaymentConfirmation');
  };
  render() {
    return (
      <View>
        <Card>
          <Text style={{marginBottom: 10}}>Top Up</Text>
          <TextInput
            placeholder="Ex. 200000"
            onChangeText={(text) => this.setState({nominal: text})}
          />

          <Button
            containerStyle={{backgroundColor: '529B77'}}
            buttonStyle={{
              borderRadius: 40,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              color: '#529B77',
            }}
            title="Top Up Sekarang"
            onPress={this.onSubmit}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topup: state.topUp.topUp,
  };
};

export default connect(mapStateToProps, {topup})(TopUp);
