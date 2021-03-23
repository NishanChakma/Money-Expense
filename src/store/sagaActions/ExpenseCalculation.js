import {call, put} from 'redux-saga/effects';
import actionType from '../../constants';

export const totalAmount = function* (action) {
  try {
    let totalAmount = 50;
    yield put({
      type: actionType.TOTAL_AMOUNT,
      param: totalAmount,
    });
  } catch (error) {
    console.log('Total amount not found', error);
  }
};

export const addTransection = function* (param) {
  try {
    let newTransection = {
      date: 34654,
      amount: 50,
    };
    yield put({
      type: actionType.TOTAL_AMOUNT,
      param: newTransection,
    });
  } catch (error) {
    console.log('New expense is not added', error);
  }
};
