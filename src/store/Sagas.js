import {takeEvery, take} from 'redux-saga/effects';
import {REHYDRATE} from 'redux-persist/lib/constants';

// -----------actionType-----------
import actionType from '../constants';

// -------------saga action call----------
import {totalAmount, addTransection} from './sagaActions/ExpenseCalculation';

const rootSaga = function* () {
  yield take(REHYDRATE);
  yield takeEvery(actionType.TOTAL_AMOUNT, totalAmount);
  yield takeEvery(actionType.ADD_TRANSECTION, addTransection);
};

export default rootSaga;
