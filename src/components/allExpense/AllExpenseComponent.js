import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Items from '../home/Items';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const AllExpenseComponent = props => {
  const [data, setNewData] = useState(props.Expense);
  const key = () => uuidv4();
  const renderItem = useCallback(({item}) => <Items item={item} />, [data]);

  // -------------------date time start-------------
  const [startTimeStamp, setstartTimeStamp] = useState(0);
  const [endTimeStamp, setEndTimeStamp] = useState(0);
  const [selectBox, setSetBox] = useState(0); //show date time
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(0);
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : date;
    let timestamp = moment(currentDate).unix();
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    selectBox === 0 ? setstartTimeStamp(timestamp) : setEndTimeStamp(timestamp);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = param => {
    param === 0 ? setSetBox(0) : setSetBox(1);
    showMode('date');
  };
  // -------------------date time end-------------

  //filter task is in here
  const filterData = () => {
    if (startTimeStamp > endTimeStamp) {
      alert("Invalid input! Start date can't be smaller than end date");
    }
    if (startTimeStamp != 0 && endTimeStamp != 0) {
      let newData = props.Expense.filter(res => {
        if (res.timeStamp > startTimeStamp && endTimeStamp > res.timeStamp) {
          return res;
        }
      });
      setNewData(newData);
    }
  };

  //reset all
  const resetAll = useCallback(() => {
    setNewData(props.Expense);
    setstartTimeStamp(0);
    setEndTimeStamp(0);
    setSetBox(0);
    setDate(new Date());
    setMode(0);
    setShow(false);
  }, [data, startTimeStamp, endTimeStamp, selectBox, date, mode, show]);

  return (
    <View style={styles.container}>
      <View style={styles.selectBox}>
        <TouchableOpacity
          style={styles.selectBoxInside}
          onPress={() => showDatepicker(0)}>
          <Text style={styles.text}>
            {startTimeStamp != 0
              ? moment.unix(startTimeStamp).format('D/M/YYYY')
              : 'Select Start Date'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectBoxInside}
          onPress={() => showDatepicker(1)}>
          <Text style={styles.text}>
            {endTimeStamp != 0
              ? moment.unix(endTimeStamp).format('D/M/YYYY')
              : 'Select End Date'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selectBoxInsideSmall}
          onPress={filterData}>
          <Text style={[styles.text, {backgroundColor: 'red'}]}>Filter</Text>
        </TouchableOpacity>
      </View>
      {data.length === 0 && (
        <Text style={styles.noData}>No data between these days</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={key}
      />

      <TouchableOpacity onPress={resetAll} style={styles.button}>
        <Text style={styles.reset}>Reset</Text>
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
    </View>
  );
};

const mapStateToProps = state => {
  const Expense = state.ExpenseReducer.expense;
  return {
    Expense,
  };
};

export default connect(mapStateToProps)(AllExpenseComponent);
