import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Measurement({name, xCoordinante, yCoordinante}) {
  return (
    <View style={styles.container}>
        <Text>{name}</Text>
        <Button style={styles.button} title="Delete" />
        <Button style={styles.button} title="Edit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    width: '100%',
  },
  button: {
  },
});
