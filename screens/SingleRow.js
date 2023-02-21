import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleRow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Single row with space-around</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    width: 50,
    height: 50,
    margin: 20,
  },
  box1: {
    backgroundColor: 'lightblue',
  },
  box2: {
    backgroundColor: 'darkorange',
  },
});

export default SingleRow;