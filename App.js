import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView from 'react-native-maps'
import SideBar from './components/sidebar/SideBar'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SideBar />
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: -22.901348,
            longitude: -47.053843,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
        </MapView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});