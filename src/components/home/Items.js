import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import moment from 'moment';

const Items = memo(({item: {category, expense, timeStamp}}) => {
  return (
    <View style={{flex: 1}}>
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
    </View>
  );
});

export default Items;
