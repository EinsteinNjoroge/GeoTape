import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Measurement from "../components/Measurement";

const Measurements = [
  // {
  //   name: 'Measurement 1',
  //   xCoordinante: 10,
  //   yCoordinnate: 50,
  // }, {
  //   name: 'Measurement 2',
  //   xCoordinante: 40,
  //   yCoordinnate: 50,
  // }
];

export default function MainScreen({ navigation }) {
  navigateToMeasurementScreen = () => {
    navigation.navigate("MeasurementScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!Measurements.length ? (
        <>
          <Text>You have no measurements!</Text>
          <Text>Click "Start New Measurement" to begin.</Text>
        </>
      ) : (
        <View style={styles.container}>
          {Measurements.map((measurement) => (
            <Measurement {...measurement} />
          ))}
        </View>
      )}
      <View style={styles.button}>
        <Button
          title="Start New Measurement"
          onPress={navigateToMeasurementScreen}
        />
      </View>
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
  button: {
    borderRadius: 5,
    position: "absolute",
    bottom: 60,
  },
});
