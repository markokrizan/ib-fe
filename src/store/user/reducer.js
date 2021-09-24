import produce from 'immer';
import { GET_ALL_USERS_SUCCESS, UPDATE_USER_SUCCESS } from './actionTypes';

export const initialState = {
  users: [],
};

/* eslint-disable default-case */
const doctorReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_USERS_SUCCESS:
        draft.users = action.users;
        break;
      case UPDATE_USER_SUCCESS:
        draft.users = draft.users.map((user) => {
          if (user.id !== action.user.id) {
            return user;
          }

          return action.user;
        });
        break;
    }
  });

export default doctorReducer;
