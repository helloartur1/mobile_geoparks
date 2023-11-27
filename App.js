import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55,
          longitude: 58,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 55, longitude: 58 }}  
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
