import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Measurement({ distance, id, name, onDelete, onEdit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${name} - ${distance}km`}</Text>
      <View style={styles.actions}>
        <Button
          style={styles.button}
          title="Delete"
          onPress={() => onDelete(id)}
        />
        <View />
        <Button style={styles.button} title="Edit" onPress={() => onEdit(id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actions: {
    width: 120,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "80%",
  },
  button: {
    width: 24,
    height: 24,
  },
});
