import React from 'react';
import { StyleSheet, View } from 'react-native';

// import SingleRow from './screens/SingleRow';
// import RowsOfBoxes from './screens/RowsOfBoxes';
// import ColumnsOfBoxes from './screens/ColumnsOfBoxes';
import AllInOne from './screens/AllInOne';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SingleRow /> */}
      {/* <RowsOfBoxes /> */}
      {/* <ColumnsOfBoxes /> */}
      <AllInOne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

