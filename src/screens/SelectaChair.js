/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import IconSeat from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

const box_count = 2;
const box_height = height / box_count;

const list = [
  {
    icon: 'seat',
  },
  {
    icon: 'seat',
  },
];

export default class SelectaChair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      color: 'grey',
    };

    this.onChangeColorSeat = () => {
      if (this.state.toggle === false) {
        this.setState({
          color: (this.state.color = 'grey'),
          toggle: !this.state.toggle,
        });
      } else {
        this.setState({
          color: (this.state.color = 'green'),
          toggle: !this.state.toggle,
        });
      }
      console.log(this.state.toggle);
    };
  }
  render() {
    return (
      <>
        <Header
          containerStyle={{backgroundColor: '#15B105', marginTop: -30}}
          centerComponent={{text: 'Choose Seat', style: {color: '#fff'}}}
        />
        <View>
          {list.map((item, index) => (
            <ListItem key={index} Icon={{name: item.icon}} />
          ))}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
  },
  box1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  box2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  box3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  box4: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
});

{
  /* <View style={styles.box1}>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color={this.state.color} onPress={this.onChangeColorSeat} />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
</View>
<View style={styles.box2}>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
</View>
<View style={styles.box3}>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
</View>
<View style={styles.box4}>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
<TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity><TouchableOpacity>
  <IconSeat name='seat' size={50} color='black' />
</TouchableOpacity>
</View> */
}
