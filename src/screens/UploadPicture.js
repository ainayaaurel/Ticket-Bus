import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {updatePicture, getMyAccount} from '../Redux/Actions/ActionsProfil';
import {connect} from 'react-redux';
import config from '../utils/config';

class UploadPicture extends Component {
  state = {
    picture: config.APP_BACKEND.concat(
      `files/${this.props.profile.usersdetails.picture}`,
    ),
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
        console.log(response.error);
      } else if (response.fileSize > 2000000) {
        ToastAndroid.show(
          'Your file so big, more than 2mb',
          ToastAndroid.SHORT,
        );
      } else {
        console.log(response.fileSize > 2000000, 'ASSS');
        this.setState({
          upload: true,
          picture: response.uri,
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
  onSubmitData = (e) => {
    console.log('jnkjnkjnkjnjnkjn');
    const data = new FormData();
    const File = {
      uri: this.state.image.uri,
      name: this.state.image.fileName,
      type: 'image/jpeg',
      size: this.state.image.fileSize,
    };
    data.append('picture', File);
    this.props.updatePicture(this.state.image);
    this.props.getMyAccount();
    // this.setState({
    //   picture:
    //     this.props.profile.usersdetails &&
    //     config.APP_BACKEND.concat(
    //       `files/${this.props.profile.usersdetails.picture}`,
    //     ),
    // });
    this.props.navigation.navigate('Account');
  };

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
                    uri: this.state.picture,
                  }}
                  showEditButton
                />
              ) : (
                <Avatar
                  size="xlarge"
                  rounded
                  source={{
                    uri:
                      this.props.profile.usersdetails &&
                      config.APP_BACKEND.concat(
                        `files/${this.props.profile.usersdetails.picture}`,
                      ),
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
            onPress={this.onSubmitData}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.account,
});

export default connect(mapStateToProps, {updatePicture, getMyAccount})(
  UploadPicture,
);
