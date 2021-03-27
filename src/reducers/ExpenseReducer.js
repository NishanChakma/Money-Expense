import actionType from '../constants';

const initialState = {
  totalAmount: 0,
  expense: [],
  loading: true,
};

const ExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.param,
        loading: false,
      };
    case actionType.ADD_TRANSECTION:
      return {
        ...state,
        expense: action.params,
        loading: false,
      };
    case actionType.DELETE_TRANSECTION:
      return {
        ...state,
        expense: action.params,
        loading: false,
      };
    default: {
      return state;
    }
  }
};

export default ExpenseReducer;
