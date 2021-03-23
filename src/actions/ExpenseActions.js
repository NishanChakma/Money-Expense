import actionType from '../constants';

export const totalAmount = () => {
  return {
    type: actionType.TOTAL_AMOUNT,
  };
};

export const addTransection = param => {
  return {
    type: actionType.ADD_TRANSECTION,
    param,
  };
};
