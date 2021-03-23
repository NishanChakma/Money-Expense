import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
const HomeComponent = () => {
  return (
    <>
      <View style={styles.homeContainer}>
        <Text style={styles.text}>Total Expense</Text>
        <Text style={styles.BDT}>$ 250 BDT</Text>
      </View>
      <View style={styles.hr}></View>

      <ScrollView>
        {/* ---------------expense------------- */}
        <View style={styles.expense}>
          <View style={styles.circle}>
            <Image
              style={styles.img}
              source={require('../../utills/images/circle.png')}
            />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.rent}>House Rent</Text>
            <Text style={styles.amount}>25 jan 2021</Text>
          </View>
          <View style={styles.balance}>
            <Text style={styles.amount}>BDT 25000</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
        {/* .............button----------- */}
        <View style={styles.expenseButton}>
          <TouchableOpacity onPress={null}>
            <Text style={styles.button}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeComponent;
