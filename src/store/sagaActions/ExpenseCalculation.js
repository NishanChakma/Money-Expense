import {call, put} from 'redux-saga/effects';
import actionType from '../../constants';

export const totalAmount = function* (action) {
  try {
    // yield put //<-----------------check
    ({
      type: actionType.TOTAL_AMOUNT,
      param: action.param,
    });
  } catch (error) {
    console.log('Total amount not found', error);
  }
};

export const addTransection = function* (action) {
  try {
    // yield put //<-----------------check
    ({
      type: actionType.ADD_TRANSECTION,
      param: action.params,
    });
  } catch (error) {
    console.log('New expense is not added', error);
  }
};
