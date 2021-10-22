import React, { useState } from "react";
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
import * as Location from "expo-location";

export default function MeasurementScreen() {
  const [name, setName] = useState("");
  const [pointACoordinate, setPointACoordinate] = useState(null);
  const [pointBCoordinate, setpointBCoordinate] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  recordGpsLocation = async (callBack) => {
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>New Measurement</Text>
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

      {!pointACoordinate ? (
        <Button
          onPress={() => recordGpsLocation(setPointACoordinate)}
          title="Record GPS location"
        />
      ) : (
        <Text>{`${pointACoordinate[0]} ${pointACoordinate[1]}`}</Text>
      )}

      <Text>Point B</Text>

      {!pointBCoordinate ? (
        <Button
          onPress={() => recordGpsLocation(setpointBCoordinate)}
          title="Record GPS location"
        />
      ) : (
        <Text>{`${pointBCoordinate[0]}, ${pointBCoordinate[1]}`}</Text>
      )}

      <View style={styles.button}>
        <Button
          disabled={!name || !pointACoordinate || !pointBCoordinate}
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
