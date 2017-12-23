import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

//import * as colors from '_config/colors';

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          backgroundColor:'#bbff00',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{
            fontSize: 20,
            color:'#5aadd5',
            fontWeight: '500',
          }}>MapScreen</Text>
      </View>
    );
  }
}
