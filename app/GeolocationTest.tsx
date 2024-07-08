import { View, Button, Text } from "react-native";
import {useState} from "react";
import * as Location from 'expo-location';

const GeolocationTest = () => {
  const [currentPosition, setCurrentPosition] = useState("")
  const getCurrentPosition = async () => {
    await Location.requestForegroundPermissionsAsync();
    const result = await Location.getCurrentPositionAsync();

    setCurrentPosition(JSON.stringify(result))
  };

  return (
    <View>
      <Button title="Click To Get Current Position" onPress={getCurrentPosition} />
      <Text>Current Position: {currentPosition}</Text>
    </View>
  );
}

export default GeolocationTest