import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/store';
import MainHome from './src/MainHome';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainHome />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
