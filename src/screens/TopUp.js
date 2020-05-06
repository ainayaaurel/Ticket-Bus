import React, {Component} from 'react';
import {Card, Button, Icon} from 'react-native-elements';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class TopUp extends Component {
  constructor(props) {
    super(props);
    this.changeScreenToAccount = () => {
      this.props.navigation.navigate('Account');
    };
  }
  render() {
    return (
      <View>
        <Card>
          <Text style={{marginBottom: 10}}>Masukan nominal top up disini</Text>
          <TextInput placeholder="Rp" />
          <TouchableOpacity onPress={this.changeScreenToAccount}>
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
            />
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
