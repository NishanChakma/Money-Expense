import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Layout = () => {
  const navigation = useNavigation();
  const onPressHandle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressHandle}>
        <Image
          style={styles.drawer}
          source={require('../utills/images/drawer.png')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Expense Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    height: 40,
    width: 40,
    marginRight: 20,
    marginLeft: 10,
  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
export default Layout;
