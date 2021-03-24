import React from 'react';
import {View, StyleSheet} from 'react-native';
import AllExpenseComponent from '../components/allExpense/AllExpenseComponent';
import Header from '../components/Header';
const AllExpense = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AllExpenseComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllExpense;
