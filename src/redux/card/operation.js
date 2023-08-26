import { cardSlice } from './slice';

export const addCard = b => dispatch => {
  dispatch(cardSlice.actions.addCard({ ...b }));
};
