/**
 * @format
 */
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

// Registring the Application
export default AppRegistry.registerComponent(appName, () => App);
