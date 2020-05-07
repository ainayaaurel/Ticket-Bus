import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconTime from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ReservationDetails extends Component {
  changeScreenToSelectChair = () => {
    this.props.navigation.navigate('SelectChair', {
      data: this.props.schedules,
    });
  };

  render() {
    return (
      <Card>
        <Text style={styles.agentName}>
          {this.props.route.params.data.name_agents}
        </Text>
        <View style={styles.fixToText}>
          <View>
            <Icon name="ios-bus" size={26} color={'#d9d9d9'} />
          </View>
          <Text style={styles.busName}>
            {this.props.route.params.data.name}
          </Text>
        </View>
        <View style={styles.fixToText}>
          <Text style={styles.classBus}>
            {this.props.route.params.data.class}
          </Text>
        </View>
        <View style={styles.fixToTextSeat}>
          <View style={styles.seats}>
            <Icon name="ios-person" size={23} color={'#d9d9d9'} />
          </View>
          <Text> {this.props.route.params.data.sheets} seats left</Text>
        </View>
        <View style={{marginBottom: 20, marginTop: 20}}>
          <View style={styles.fixToText}>
            <Text style={styles.route}>
              {this.props.route.params.data.departure_at} -{' '}
              {this.props.route.params.data.arrival_at}{' '}
            </Text>
          </View>
          <View style={styles.fixToTextSeat}>
            <View style={styles.seats}>
              <IconTime name="clock-outline" size={23} color={'#d9d9d9'} />
            </View>
            <Text>{this.props.route.params.data.time}</Text>
          </View>
        </View>
        <View style={styles.fixToText}>
          <Button
            buttonStyle={{backgroundColor: '#27ae60'}}
            onPress={() => {
              this.props.navigation.navigate('SelectChair', {
                data: this.props.route.params.data,
              });
            }}
            title="Select Seat"
            disabled={
              this.props.route.params.data.balance <
              this.props.route.params.data.price
                ? true
                : null
            }
          />

          <Text style={styles.price}>
            Rp {this.props.route.params.data.price}
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 50,
  },
  price: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  route: {
    fontSize: 14,
  },
  busName: {
    marginRight: 1,
    marginLeft: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  seats: {
    marginLeft: 110,
    marginRight: 5,
  },
  classBus: {
    marginLeft: 27,
    marginTop: -9,
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#d9d9d9',
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9',
  },
  agentName: {
    marginBottom: 5,
    fontWeight: 'bold',
    paddingBottom: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  fixToText: {
    flexDirection: 'row',
  },
  fixToTextSeat: {
    flexDirection: 'row',
    marginTop: -35,
    marginLeft: 90,
  },
  headersecond: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 40,
    borderBottomWidth: 0.3,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 9,
    right: 30,
  },
  input: {
    top: 8,
  },
});
