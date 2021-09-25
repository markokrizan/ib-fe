import produce from 'immer';
import {
  GET_ALL_USERS_SUCCESS,
  GET_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
} from './actionTypes';

export const initialState = {
  users: [],
  user: null,
};

/* eslint-disable default-case */
const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_USERS_SUCCESS:
        draft.users = action.users;
        break;
      case UPDATE_USER_SUCCESS:
        draft.users =
          draft.users?.map((user) => {
            if (user.id !== action.user.id) {
              return user;
            }

            return action.user;
          }) || [];

        draft.user = action.user;
        break;
      case GET_USER_SUCCESS:
        draft.user = action.user;
        break;
    }
  });

export default userReducer;
