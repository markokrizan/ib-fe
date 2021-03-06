import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import loadingReducer from './loading/reducer';
import notifierReducer from './notifier/reducer';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import doctorReducer from './doctor/reducer';
import appointmentReducer from './appointment/reducer';
import patientReducer from './patient/reducer';
import userReducer from './user/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    notifier: notifierReducer,
    auth: authReducer,
    profile: profileReducer,
    doctor: doctorReducer,
    appointments: appointmentReducer,
    patient: patientReducer,
    user: userReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
