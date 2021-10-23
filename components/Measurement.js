import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Measurement({ distance, id, name, onDelete, onEdit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${name} - ${distance}km`}</Text>
      <Button
        style={styles.button}
        title="Delete"
        onPress={() => onDelete(id)}
      />
      <Button style={styles.button} title="Edit" onPress={() => onEdit(id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
