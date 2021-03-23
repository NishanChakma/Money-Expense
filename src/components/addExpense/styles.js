import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addExpense: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 20,
    color: '#6F5B84',
  },
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  inputGroup: {
    width: '90%',
    marginHorizontal: '5%',
    height: 50,
  },
  input: {
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  selectDate: {
    marginLeft: '5%',
    marginTop: 20,
  },
  dateTime: {
    fontSize: 14,
    color: 'red',
  },
  dateTimeInside: {
    color: '#000',
  },
  submit: {
    marginHorizontal: '20%',
    width: '60%',
  },
  submitText: {
    paddingVertical: 10,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
});

export default styles;
