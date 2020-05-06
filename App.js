import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/store';
import MainHome from './src/MainHome';

export default class App extends Component {
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

// const AppNavigator = createSwitchNavigator({
//   AuthLoading: AuthLoadingScreen,
//   App: TabNavigator,
//   Auth: AuthStack,
// });

// const AppContainer = createAppContainer(AppNavigator);

// function App() {
//   return (

//         <AppContainer />

//   );
// }
