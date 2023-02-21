import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SingleRow from './SingleRow';
import RowsOfBoxes from './RowsOfBoxes';
import ColumnsOfBoxes from './ColumnsOfBoxes';

const AllInOne = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, { flex: 1 }]}>
        <SingleRow />
      </View>
      <View style={[styles.section, { flex: 2 }]}>
        <View style={{ flex: 1 }}>
          <RowsOfBoxes />
        </View>
      </View>
      <View style={[styles.section, { flex: 2 }]}>
        <View style={{ flex: 1 }}>
          <ColumnsOfBoxes />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
});
export default AllInOne;