import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColumnsOfBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Columns of boxes</Text>
      <View style={styles.row}>
        <View style={[styles.column, { height: 200 }]}>
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        </View>
        <View style={[styles.column, { height: 200 }]}>
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
          <View style={[styles.box, { backgroundColor: 'darkorange' }]} />
        </View>
        <View style={[styles.column, { height: 200 }]}>
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
          <View style={[styles.box, { backgroundColor: 'lightblue' }]} />
        </View>
        <View style={[styles.column, { height: 200 }]}>
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
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
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