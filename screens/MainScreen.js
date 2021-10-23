import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import Measurement from "../components/Measurement";
import actionTypes from "../actionTypes";

export default function MainScreen({ navigation }) {
  const measurements = useSelector((state) => state) || [];
  const dispatch = useDispatch();

  const navigateToMeasurementScreen = () => {
    navigation.navigate("MeasurementScreen");
  };

  handleDeleteMeasurement = (id) => {
    const action = {
      type: actionTypes.DELETE_MEASUREMENT,
      id,
    };
    dispatch(action);
  };

  handleEditMeasurement = (id) => {
    navigation.navigate("MeasurementScreen", { id });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!measurements.length ? (
        <>
          <Text>You have no measurements!</Text>
          <Text>Click "Start New Measurement" to begin.</Text>
        </>
      ) : (
          {measurements.map(({ id, name }) => (
            <Measurement
              key={id}
              onDelete={handleDeleteMeasurement}
              onEdit={handleEditMeasurement}
              id={id}
              name={name}
            />
          ))}
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
