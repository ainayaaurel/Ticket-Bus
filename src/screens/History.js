import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button, Header} from 'react-native-elements';
import IconBus from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import IconTime from 'react-native-vector-icons/MaterialCommunityIcons';
import {getHistory} from '../Redux/Actions/ActionsReservations';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }
  render() {
    return (
      <ScrollView>
        <Header
          containerStyle={{backgroundColor: '#15B105', marginTop: -30}}
          centerComponent={{
            text: 'History',
            fontWeight: 'bold',
            style: {color: '#fff'},
          }}
        />
        <View>
          {this.props.history &&
            this.props.history.map((v, i) => {
              return (
                <>
                  <Card
                    key={i}
                    style={{marginTop: 50}}
                    containerStyle={{borderRadius: 4}}>
                    <Text style={styles.agentName}>{v.name_agents}</Text>
                    <View style={styles.fixToText}>
                      <View>
                        <Icon name="ios-bus" size={26} color={'#d9d9d9'} />
                      </View>
                      <Text style={styles.busName}>{v.bus_name}</Text>
                    </View>
                    <View style={styles.fixToText}>
                      <Text style={styles.classBus}>{v.class}</Text>
                    </View>
                    <View style={styles.fixToTextSeat}>
                      <View style={styles.seats}>
                        <Icon name="ios-person" size={23} color={'#d9d9d9'} />
                      </View>
                      <Text> {v.sheets} seats left</Text>
                    </View>
                    <View style={{marginBottom: 20, marginTop: 20}}>
                      <View style={styles.fixToText}>
                        <Text style={styles.route}>
                          {v.departure_at} - {v.arrival_at}{' '}
                        </Text>
                      </View>
                      <View style={styles.fixToTextSeat}>
                        <View style={styles.seats}>
                          <IconTime
                            name="clock-outline"
                            size={23}
                            color={'#d9d9d9'}
                          />
                        </View>
                        <Text>{v.time}</Text>
                      </View>
                    </View>
                    <View style={styles.fixToText}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {' '}
                        {v.date}{' '}
                      </Text>
                    </View>
                  </Card>
                </>
              );
            })}
        </View>
      </ScrollView>
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
const mapStateToProps = (state) => {
  return {
    history: state.reservation.data,
  };
};

export default connect(mapStateToProps, {getHistory})(History);
