import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card, PricingCard, CheckBox} from 'react-native-elements';
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSort from 'react-native-vector-icons/FontAwesome5';
import IconTime from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  getSchedules,
  schedulesDetails,
} from '../Redux/Actions/ActionsSchedules';
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH} = Dimensions.get('window');
class SelectBus extends Component {
  constructor(props) {
    super(props);
    this.props.getSchedules(this.props.route.params.data);
    this.changeScreenToHome = () => {
      this.props.navigation.navigate('Home');
    };
    this.onChangeScreenChooseChair = () => {
      this.props.navigation.navigate('Back');
    };
    this.changeScreenToPayment = async (data) => {
      // console.log(this.state.id);
      await this.props.schedulesDetails(data);
      // await this.props.navigation.navigate('Payment Confirmation');
    };
  }
  state = {
    id: 0,
    schedules: null,
  };
  componentDidMount() {
    console.log('ini data sche', this.props.schedules);
  }
  render() {
    console.log(this.props.schedules);
    return (
      <ScrollView>
        <View>
          {/* <View style={styles.header}>
            <IconBus name='bus-side' size={50} color='#fff' />
          </View> */}
          {/* <View style={styles.headersecond}>
            <View style={styles.logoContainer}>
              <IconSort name='sort-amount-down' size={18} color='#000' style={styles.inputIcon} />
              <Text style={styles.input} > 5 Busses Found </Text>
            </View>
          </View> */}
          <Text> aloohaaaaa</Text>
          {/* <View>
            {this.props.schedules &&
              this.props.schedules.map((v, i) => {
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
                        <Text style={styles.busName}>{v.name}</Text>
                      </View>
                      <View style={styles.fixToText}>
                        <Text style={styles.classBus}>{v.class}</Text>
                      </View>
                      <View style={styles.fixToTextSeat}>
                        <View style={styles.seats}>
                          <Icon name="ios-person" size={23} color={'#d9d9d9'} />
                        </View>
                        <Text>{v.sheets} seats left</Text>
                      </View>
                      <View style={{marginBottom: 20, marginTop: 20}}>
                        <View style={styles.fixToText}>
                          <Text style={styles.route}>
                            {v.departure_at} - {v.arrival_at}
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
                        <TouchableOpacity
                          onPress={() => this.changeScreenToPayment(v)}>
                          <CheckBox
                            containerStyle={{backgroundColor: '#27ae60'}}
                            iconType="material"
                            checkedIcon="exit-to-app"
                            textStyle={{color: '#fff'}}
                            checkedColor="#fff"
                            title="Purchase"
                            checked={this.changeScreenToPayment}
                          />
                        </TouchableOpacity>
                        <Text style={styles.price}>Rp {v.price}</Text>
                      </View>
                    </Card>
                  </>
                );
              })}
          </View> */}
        </View>
      </ScrollView>
    );
  }
}

// onPress={() => this.props.getSchedules({})}

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
    schedules: state.schedules.schedules,
    schedulesDetails: state.schedules.schedulesDetails,
  };
};

export default connect(mapStateToProps, {getSchedules, schedulesDetails})(
  SelectBus,
);
