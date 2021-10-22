import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorStack from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
};