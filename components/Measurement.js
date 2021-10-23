import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function Measurement({ id, name, onDelete, onEdit }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
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
    borderColor: "#000",
    borderWidth: 2,
  },
  button: {},
});
