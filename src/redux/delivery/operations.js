import { setDelivery } from './slice';

export const addDelivery = b => dispatch => {
  dispatch(setDelivery.addDelivery({ ...b }));
};
export const removeDelivery = () => dispatch => {
  dispatch(setDelivery.removeDelivery());
};
