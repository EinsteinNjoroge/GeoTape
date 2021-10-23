import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import * as Location from "expo-location";
import actionTypes from "../actionTypes";
import { calculateDistance } from "../utils";

export default function MeasurementScreen({ navigation, ...props }) {
  const { route } = props;
  const { params } = route || {};
  const { id: measurementId } = params || {};

  const dispatch = useDispatch();
  const state = useSelector((state) =>
    state.filter((x) => x.id === measurementId)
  );
  const measurement = state.length > 0 ? state[0] : {};

  const [name, setName] = useState(measurement.name);
  const [pointA, setPointA] = useState(measurement.pointA);
  const [pointB, setpointB] = useState(measurement.pointB);
  const [errorMsg, setErrorMsg] = useState(null);

  const getGpsCoordinates = async (callBack) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    callBack([latitude, longitude]);
  };

  const saveMeasurement = (type) => {
    const distance = calculateDistance(pointA, pointB);

    const action = {
      type,
      measurement: {
        id: measurement.id || uuidv4(),
        name,
        pointA,
        pointB,
        distance,
      },
    };

    dispatch(action);
    navigation.goBack();
  };

  const saveNewMeasurement = () => saveMeasurement(actionTypes.ADD_MEASUREMENT);

  const updateMeasurement = () =>
    saveMeasurement(actionTypes.UPDATE_MEASUREMENT);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>
        {measurement.name
          ? `Editing "${measurement.name}""`
          : "New Measurement"}
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : "height"}
        style={styles.nameInputView}
      >
        <Text>Name</Text>
        <TextInput
          onChangeText={setName}
          style={styles.nameInput}
          placeholder={"Name"}
          value={name}
        />
      </KeyboardAvoidingView>

      <Text>Point A</Text>

      <Button
        onPress={() => getGpsCoordinates(setPointA)}
        title={pointA ? `${pointA[0]} ${pointA[1]}` : "Record GPS location"}
      />

      <Text>Point B</Text>

      <Button
        onPress={() => getGpsCoordinates(setpointB)}
        title={pointB ? `${pointB[0]}, ${pointB[1]}` : "Record GPS location"}
      />

      <View style={styles.button}>
        <Button
          disabled={!name || !pointA || !pointB}
          onPress={measurement ? updateMeasurement : saveNewMeasurement}
          title="Save"
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    width: 250,
    borderRadius: 5,
    position: "absolute",
    bottom: 60,
  },
  nameInput: {},
});
