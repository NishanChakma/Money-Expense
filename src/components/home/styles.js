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
    marginHorizontal: '20%',
    width: '60%',
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 10,
  },

  expense: {
    flexDirection: 'row',
    width: '90%',
    height: 75,
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
    color: '#000',
  },
  amount: {
    fontSize: 12,
  },
  balance: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMoreContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
  viewMore: {
    textDecorationLine: 'underline',
  },
});

export default styles;
