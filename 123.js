import React from 'react';
import { View } from 'react-native';
import { MapView, Marker, Polyline } from 'react-leaflet';

const MyMapComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Пример маркера */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />

        {/* Пример линии */}
        <Polyline
          positions={[
            { latitude: 37.78825, longitude: -122.4324 },
            { latitude: 37.78925, longitude: -122.4344 },
          ]}
        />
      </MapView>
    </View>
  );
};

export default MyMapComponent;