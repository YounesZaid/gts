import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

//import * as colors from '_config/colors';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor:'#429867',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
            fontSize: 20,
            color:'#cc8bcc',
            fontWeight: '500',
          }}>ProfileScreen</Text>
      </View>
    );
  }
}
