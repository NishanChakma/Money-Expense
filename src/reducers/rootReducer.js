import {combineReducers} from 'redux';

//import all reducers here...
import ExpenseReducer from './ExpenseReducer';

const rootReducer = combineReducers({
  ExpenseReducer,
});

export default rootReducer;
