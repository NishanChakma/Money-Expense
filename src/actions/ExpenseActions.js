import actionType from '../constants';

export const totalAmount = param => {
  return {
    type: actionType.TOTAL_AMOUNT,
    param: param,
  };
};

export const addTransection = params => {
  return {
    type: actionType.ADD_TRANSECTION,
    params: params,
  };
};

export const deleteTransection = params => {
  return {
    type: actionType.DELETE_TRANSECTION,
    params: params,
  };
};
