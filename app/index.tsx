import { View } from "react-native";
import GeolocationTest from "@/app/GeolocationTest";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GeolocationTest />
    </View>
  );
}
