import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Keyboard,
  TextInput,
} from 'react-native';
import {totalAmount, deleteTransection} from '../../actions/ExpenseActions';
import styles from './styles';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Items from '../home/Items';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const AllExpenseComponent = props => {
  const OriginData = props.Expense;
  const [category, setCategory] = useState('');
  const [StoreData, SetStoreData] = useState([]);
  useEffect(() => SetStoreData(OriginData), [OriginData]);

  // -----------FlatList render item----------
  const key = () => uuidv4();
  const renderItem = useCallback(
    ({item, index}) => (
      <Items
        item={item}
        data={StoreData}
        totalAmount={totalAmount}
        deleteTransection={deleteTransection}
        dispatch={props.dispatch}
        index={index}
      />
    ),
    [StoreData],
  );

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
    Keyboard.dismiss;
    if (startTimeStamp != 0 && endTimeStamp != 0 && category === '') {
      let newData = props.Expense.filter(
        res => res.timeStamp > startTimeStamp && endTimeStamp > res.timeStamp,
      );
      SetStoreData(newData);
    } else if (category !== '' && startTimeStamp === 0 && endTimeStamp === 0) {
      let newData = props.Expense.filter(res => res.category === category);
      SetStoreData(newData);
    } else if (startTimeStamp != 0 && endTimeStamp != 0 && category !== '') {
      let newData = props.Expense.filter(
        res =>
          res.timeStamp > startTimeStamp &&
          endTimeStamp > res.timeStamp &&
          res.category === category,
      );
      SetStoreData(newData);
    } else {
      alert('Invalid input!');
    }
  };

  //reset all
  const resetAll = useCallback(() => {
    SetStoreData(OriginData);
    setCategory('');
    setstartTimeStamp(0);
    setEndTimeStamp(0);
    setSetBox(0);
    setDate(new Date());
    setMode(0);
    setShow(false);
  }, [startTimeStamp, endTimeStamp, selectBox, date, mode, show]);

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
      </View>
      <Text style={styles.or}>or</Text>
      <View style={styles.selectBox2}>
        <TextInput
          style={styles.input}
          onChangeText={val => setCategory(val)}
          value={category}
          placeholder="Enter category name"
        />
        <TouchableOpacity
          style={styles.selectBoxInsideSmall}
          accessible={false}
          onPress={filterData}>
          <Text style={[styles.text, styles.filter]}>Filter</Text>
        </TouchableOpacity>
      </View>
      {StoreData.length === 0 && <Text style={styles.noData}>No data</Text>}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={StoreData}
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
