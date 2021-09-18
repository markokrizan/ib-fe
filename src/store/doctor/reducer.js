import produce from 'immer';
import {
  GET_DOCTORS_ERROR,
  GET_DOCTORS_REQUEST,
  GET_DOCTORS_SUCCESS,
} from './actionTypes';

export const initialState = {
  doctors: [],
  getDoctorsError: null,
};

/* eslint-disable default-case */
const doctorReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_DOCTORS_REQUEST:
        draft.getDoctorsError = false;
        break;
      case GET_DOCTORS_SUCCESS:
        draft.doctors = action.doctors;
        break;
      case GET_DOCTORS_ERROR:
        draft.getDoctorsError = true;
    }
  });

export default doctorReducer;
