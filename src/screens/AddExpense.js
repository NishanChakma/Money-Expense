import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddExpenseComponent from '../components/addExpense/AddExpenseComponent';
import Header from '../components/Header';

const AddExpense = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AddExpenseComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddExpense;
