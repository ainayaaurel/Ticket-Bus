import React, {Component} from 'react';
import {Card, Button, Input} from 'react-native-elements';
import {Text} from 'react-native';

export default class SelectaChair extends Component {
  state = {
    seat: '',
  };

  onHandleToScreenPayment = () => {
    this.props.navigation.navigate('PaymentConfirmation');
  };
  render() {
    return (
      <Card>
        <Text style={{marginBottom: 5}}>Type your seat number</Text>
        <Input
          placeholder="Ex.1"
          onChangeText={(text) => this.setState({seat: text})}
        />

        <Button
          buttonStyle={{backgroundColor: '#27ae60', width: '50%'}}
          // icon={<IconTopup name="payment" color="#fff" size={20} />}
          title="Next"
          onPress={() =>
            this.props.navigation.navigate('PaymentConfirmation', {
              data: this.props.route.params.data,
              seat: this.state.seat,
            })
          }
        />
      </Card>
    );
  }
}
