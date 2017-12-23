import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'gts.MapScreen', // this is a registered name for a screen
      icon: require('./icons/logout.png'),
      //selectedIcon: require('../icons/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'gts.ProfileScreen',
      icon: require('./icons/profile.png'),
      //selectedIcon: require('../icons/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
