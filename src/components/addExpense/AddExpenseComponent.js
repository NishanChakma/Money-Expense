import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import moment from 'moment';
import {totalAmount, addTransection} from '../../actions/ExpenseActions';
import {connect} from 'react-redux';
// import Loader from '../Loader';
import {useNavigation} from '@react-navigation/native';

const AddExpenseComponent = props => {
  const navigation = useNavigation();
  const [value, setvalue] = useState(''); //category
  const [price, setPrice] = useState(''); //price
  // -------------------date time start-------------
  const [showScreen, setShowScreen] = useState(false); //show date time
  const [timeStamp, setTimeStamp] = useState(0); //timeStamp
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(0);
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : date;
    let timestamp = moment(currentDate).unix();
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setTimeStamp(timestamp);
    setShowScreen(selectedDate === undefined ? false : true);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  // -------------------date time end-------------
  const submitData = useCallback(async () => {
    if (
      timeStamp === 0 ||
      value.length === 0 ||
      price.length === 0 ||
      !showScreen
    ) {
      ToastAndroid.show(
        'Invalid Data! Please input the correct data.',
        ToastAndroid.SHORT,
      );
      return;
    } else {
      const newPrice = parseInt(price);
      const finalExpense = props.TotalAmount + newPrice;
      const expenseArray = {
        category: value,
        expense: price,
        timeStamp: timeStamp,
      };
      const newTransection = [...props.Expense, expenseArray];
      await props.dispatch(totalAmount(finalExpense)); //<-----------------check
      await props.dispatch(addTransection(newTransection)); //<------------check
      navigation.navigate('Home');
    }
  }, [timeStamp, value, price, showScreen, props.TotalAmount, props.Expense]);

  return (
    <>
      <Text style={styles.addExpense}>Add Expense</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={val => setvalue(val)}
          value={value}
          placeholder="Enter your category"
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={val => setPrice(val)}
          value={price}
          placeholder="Expense Price"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={showDatepicker} style={styles.selectDate}>
        <Text style={styles.dateTime}>
          Select Your Date:{' '}
          <Text style={styles.dateTimeInside}>
            {showScreen ? moment.unix(timeStamp).format('D/M/YYYY') : null}
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={submitData} style={styles.submit}>
        <Text style={styles.submitText}>Add Transection</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
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

export default connect(mapStateToProps)(AddExpenseComponent);
