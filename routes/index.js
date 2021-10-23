import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import MeasurementScreen from "../screens/MeasurementScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MeasurementScreen" component={MeasurementScreen} />
    </Stack.Navigator>
  );
}
