import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    // flex: 1,
    backgroundColor: '#6F5C84',
    alignItems: 'center',
    padding: 40,
    margin: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  BDT: {
    fontSize: 18,
    color: '#BBC0C4',
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  expenseButton: {
    marginTop: 20,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  expense: {
    flexDirection: 'row',
    width: '90%',
    height: 80,
    marginHorizontal: '5%',
  },
  circle: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 40,
    width: 40,
  },
  textGroup: {
    width: '60%',
    justifyContent: 'center',
  },
  rent: {
    fontSize: 18,
  },
  amount: {
    fontSize: 12,
  },
  balance: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
