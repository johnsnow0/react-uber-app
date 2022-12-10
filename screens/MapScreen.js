import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
        <View className="h-1/2">
            <Map />
        </View>

        <View className="h-1/2"></View>

      <Text>MapScreen</Text>
    </View>
  )
}

export default MapScreen