import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColumnsOfBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Columns of boxes</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        </View>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        </View>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        </View>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    margin: 2,
  },
});

export default ColumnsOfBoxes;
