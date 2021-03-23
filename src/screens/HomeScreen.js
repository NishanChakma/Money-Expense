import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../components/Header';
import SplashScreen from 'react-native-splash-screen';
import HomeComponent from '../components/home/HomeComponent';

const HomeScreen = ({totalAmount}) => {
  useEffect(() => SplashScreen.hide(), []);
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Header />
      <HomeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  const totalAmount = state.ExpenseReducer.totalAmount;
  return {
    totalAmount,
  };
};

export default connect(mapStateToProps)(HomeScreen);
