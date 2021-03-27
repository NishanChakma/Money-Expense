import {takeEvery, take} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';

// -----------actionType-----------
import actionType from '../constants';

// -------------saga action call----------
import {
  totalAmount,
  addTransection,
  deleteTransection,
} from './sagaActions/ExpenseCalculation';

const rootSaga = function* () {
  yield take(REHYDRATE);
  yield takeEvery(actionType.TOTAL_AMOUNT, totalAmount);
  yield takeEvery(actionType.ADD_TRANSECTION, addTransection);
  yield takeEvery(actionType.DELETE_TRANSECTION, deleteTransection);
};

export default rootSaga;
