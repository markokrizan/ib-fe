import produce from 'immer';
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './actionTypes';

export const initialState = {};

/* eslint-disable default-case */
const userProfileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_PASSWORD_REQUEST:
      case CHANGE_PASSWORD_SUCCESS:
      case CHANGE_PASSWORD_ERROR:
        break;
    }
  });

export default userProfileReducer;
