import React, {useState} from 'react';
import {View, Text, TextInput, Platform, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import moment from 'moment';
const AddExpenseComponent = () => {
  const [value, setvalue] = useState('');
  const [price, setPrice] = useState('');

  // -------------------date time start-------------
  const [showScreen, setShowScreen] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : date;
    let timestamp = moment(currentDate).unix();
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setTimeStamp(timestamp);
    setShowScreen(true);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
    // setShowScreen(false);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  // -------------------date time end-------------

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
            {showScreen
              ? moment.unix(timeStamp).format('M/D/YYYY') +
                ' ' +
                moment.unix(timeStamp).format('h:mm A')
              : null}
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={null} style={styles.submit}>
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

export default AddExpenseComponent;
