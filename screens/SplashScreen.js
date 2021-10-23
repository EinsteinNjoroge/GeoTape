import React from "react";
import { StyleSheet, Image, View } from "react-native";

const splahScreenImage = require("../assets/splahScreenImage.png");

export default function SplashScreen({ navigation }) {
  // Show mainscreen after 3 seconds
  setTimeout(() => {
    navigation.replace("MainScreen");
  }, 1000);

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={splahScreenImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 300,
  },
});
