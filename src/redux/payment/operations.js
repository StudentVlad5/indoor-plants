import { setPayment } from './slice';

export const addPayment = b => dispatch => {
  dispatch(setPayment.addPayment({ ...b }));
};
export const removePayment = () => dispatch => {
  dispatch(setPayment.removePayment());
};
