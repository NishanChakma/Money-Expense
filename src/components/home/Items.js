import React, {memo, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Items = memo(
  ({
    item: {category, expense, timeStamp},
    data,
    totalAmount,
    deleteTransection,
    dispatch,
    index,
  }) => {
    const deleteData = useCallback(() => {
      Alert.alert('Delete this Data', 'Are you sure?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            let tAmount = 0;
            const filterData = data.filter((res, key) => {
              if (key !== index) {
                let expense = parseInt(res.expense);
                tAmount = tAmount + expense;
                return res;
              }
            });
            dispatch(totalAmount(tAmount));
            dispatch(deleteTransection(filterData));
          },
        },
      ]);
    }, [data, totalAmount, deleteTransection, category, timeStamp]);
    return (
      <TouchableOpacity style={{flex: 1}} onPress={deleteData}>
        <View style={styles.expense}>
          <View style={styles.circle}>
            <Image
              style={styles.img}
              source={require('../../utills/images/circle.png')}
            />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.rent}>{category}</Text>
            <Text style={styles.amount}>
              {moment.unix(timeStamp).format('D/M/YYYY')}
            </Text>
          </View>
          <View style={styles.balance}>
            <Text style={styles.amount}>BDT {expense}</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
      </TouchableOpacity>
    );
  },
);

export default Items;
