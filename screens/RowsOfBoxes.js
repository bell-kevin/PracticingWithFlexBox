import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const RowsOfBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rows of boxes</Text>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    margin: 2,
  },
});

export default RowsOfBoxes;
