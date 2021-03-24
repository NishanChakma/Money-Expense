import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Items from './Items';
import styles from './styles';

const HomeComponent = props => {
  let StoreData = props.Expense;
  // const [data, setData] = useState(StoreData);
  const key = useCallback(() => uuidv4(), []);
  const navigation = useNavigation();
  const onPressHandle = useCallback(() => {
    navigation.navigate('Add Expense');
  }, [navigation]);

  // useEffect(() => {
  //   //last 3 transection
  //   var i,
  //     j,
  //     temparray,
  //     chunk = 3;
  //   for (i = 0, j = StoreData.length; i < j; i += chunk) {
  //     temparray = StoreData.slice(i, i + chunk);
  //     setData(temparray);
  //     return;
  //   }
  // }, [StoreData]);

  const renderItem = useCallback(({item}) => <Items item={item} />, [
    StoreData,
  ]);

  return (
    <>
      <View style={styles.homeContainer}>
        <Text style={styles.text}>Total Expense</Text>
        <Text style={styles.BDT}>$ {props.TotalAmount} BDT</Text>
      </View>
      {StoreData.length === 0 && <View style={styles.hr}></View>}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={StoreData}
        renderItem={renderItem}
        keyExtractor={key}
      />
      {/* <TouchableOpacity style={styles.viewMoreContainer} onPress={null}>
        <Text style={styles.viewMore}>View More</Text>
      </TouchableOpacity> */}
      <View style={styles.expenseButton}>
        <TouchableOpacity onPress={onPressHandle}>
          <Text style={styles.button}>Add Expense</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapStateToProps = state => {
  const TotalAmount = state.ExpenseReducer.totalAmount;
  const Expense = state.ExpenseReducer.expense;
  return {
    TotalAmount,
    Expense,
  };
};

export default connect(mapStateToProps)(HomeComponent);
