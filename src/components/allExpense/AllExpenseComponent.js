import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Items from '../home/Items';

const AllExpenseComponent = props => {
  const [startDate, setStartDate] = useState('Select Start Date');
  const [endDate, setEndDate] = useState('Select End Date');
  const key = () => uuidv4();
  const renderItem = useCallback(({item}) => <Items item={item} />, [
    props.Expense,
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.selectBox}>
        <TouchableOpacity style={styles.selectBoxInside} onPress={null}>
          <Text style={styles.text}>{startDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBoxInside} onPress={null}>
          <Text style={styles.text}>{endDate}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.Expense}
        renderItem={renderItem}
        keyExtractor={key}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const TotalAmount = state.ExpenseReducer.totalAmount;
  const Expense = state.ExpenseReducer.expense;
  const Loading = state.ExpenseReducer.loading;
  return {
    TotalAmount,
    Expense,
    Loading,
  };
};

export default connect(mapStateToProps)(AllExpenseComponent);
