import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

export default class UploadPicture extends Component {
  state = {
    picture: '',
  };

  handleChoosePhoto = () => {
    const options = {
      quality: 0.7,
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        path: 'images',
        cameraRoll: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('responeseeeeeeeeeeee', response);
      if (response.error) {
        console.log(error);
      } else if (response.fileSize > 200000) {
        ToastAndroid.show('Your file so big, please', ToastAndroid.SHORT);
      } else {
        console.log(response.fileSize > 200000, 'ASSS');
        this.setState({
          upload: true,
          picture: response,
          image: {
            name: response.fileName,
            type: response.type,
            size: response.fileSize,
            uri:
              Platform.OS === 'android'
                ? response.uri
                : response.uri.replace('file://'),
          },
        });
      }
    });
  };

  componentDidMount() {
    this.props.UploadPicture(this, state.picture);
  }

  render() {
    return (
      <View>
        <Card title="Update your Picture in here!">
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this.handleChoosePhoto}>
              {this.state.picture ? (
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  showEditButton
                />
              ) : (
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  showEditButton
                />
              )}
            </TouchableOpacity>
          </View>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="SAVE"
          />
        </Card>
      </View>
    );
  }
}
