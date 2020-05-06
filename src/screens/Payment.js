import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {schedulesDetails} from '../Redux/Actions/ActionsSchedules';
import {connect} from 'react-redux';

const {width: WIDTH} = Dimensions.get('window');
class Payment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('ini sche details', this.props.details);
  }
  render() {
    console.log('HAHA', this.state.data);

    return <></>;
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
  btnSearch: {
    width: WIDTH - 55,
    height: 45,
    backgroundColor: '#42A845',
    justifyContent: 'center',
    marginTop: 20,
  },
  textSearch: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  box1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 90,
  },
});
const mapStateToProps = (state) => {
  return {
    details: state.schedules.schedulesDetails,
  };
};

export default connect(mapStateToProps)(Payment);

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
