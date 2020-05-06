import React, {Component} from 'react';
import {Header} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import IconBarcode from 'react-native-vector-icons/FontAwesome';

export default class MyOrder extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={localStyle.headerContainer}
          rightComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY BOOKING', style: {color: '#fff'}}}
        />
        <View style={localStyle.headersecond}>
          <View style={localStyle.box1}>
            <Text style={localStyle.inputDeparture}> Departure Date</Text>
            <Text style={localStyle.input}> Route : Bandung - Jakarta</Text>
            <Text style={localStyle.input}> Date : 18-04-2020</Text>
            <Text style={localStyle.input}> Time : 09:00:00</Text>
            <Text style={localStyle.inputTicket}> Ticket Price</Text>
            <Text style={localStyle.input}> Price : Rp 120.000</Text>
            <Text style={localStyle.input}> Total : Rp 120.000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#15B105',
    // justifyContent: 'space-around',
    marginTop: -20,
    height: 80,
  },
  headersecond: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 500,
    marginTop: 20,
  },
  input: {
    top: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 5,
    paddingLeft: 10,
  },
  inputDeparture: {
    top: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 17,
  },
  inputTicket: {
    top: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 17,
  },
  box1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 90,
  },
});

{
  /* export default class History extends Component {
  render() {
    return (
      <View>
        {/* <Header
          containerStyle={{ backgroundColor: '#15B105', marginTop: -30 }}
          centerComponent={{ text: 'MY ORDER', fontWeight: 'bold', style: { color: '#fff' } }}
          leftComponent={<IconBus name='bus' color='#fff' size={30} />}
          rightComponent={<Icondots name='dots-vertical' color='#fff' size={30} />}
        /> */
}

//       </View >
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     flex: 1,
//     // height: 80,
//     backgroundColor: 'grey'
//   }
// }) * /}

{
  /* <View style={{ flex: 1 }}>
          <Text>Departure data</Text>
          <Text>Departure : </Text>
          <Text>Arrival : </Text>
          <Text>Tanggal : </Text>
          <Text>Harga Tiket</Text>
          <Text>Harga :</Text>
          <Text>Total :</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text>Test</Text>
        </View> */
}
