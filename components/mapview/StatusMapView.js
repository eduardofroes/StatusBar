import { Component, View } from 'react-native';

import MapView from 'react-native-maps'
import React from 'react';

export default class StatusMapView extends Component {
    render() {
      return (
       <View>
           <MapView
                loadingEnabled={true} 
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0321,
                }}
              />
        </View>                                                                                                                                                                             
      );
    }
  }