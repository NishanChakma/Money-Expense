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
  const [selectBox, setSelectBox] = useState(0);
  const [show, setShow] = useState(false);

  const showDatepicker = useCallback(
    param => {
      param === 0 ? setSelectBox(0) : setSelectBox(1);
      setShow(true);
    },
    [selectBox, show],
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate ? selectedDate : new Date();
    let timestamp = moment(currentDate).unix();
    selectBox === 0 ? setstartTimeStamp(timestamp) : setEndTimeStamp(timestamp);
    setShow(Platform.OS === 'ios');
  };

  // -------------------date time end-------------

  //filter task is in here
  const filterData = () => {
    if (startTimeStamp != 0 && endTimeStamp != 0) {
      let newData = props.Expense.filter(res => {
        if (res.timeStamp > startTimeStamp && endTimeStamp > res.timeStamp) {
          return res;
        }
      });
      setNewData(newData);
    }
  };
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
          <Text style={[styles.text, {backgroundColor: '#e60000'}]}>
            Filter
          </Text>
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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'date'}
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
