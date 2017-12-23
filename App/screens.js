import { Navigation } from 'react-native-navigation';

import MapScreen from './mapModule/';
import ProfileScreen from './profileModule/';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('gts.MapScreen', () => MapScreen);
  Navigation.registerComponent('gts.ProfileScreen', () => ProfileScreen);
}
