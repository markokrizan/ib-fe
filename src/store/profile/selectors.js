import { makeSelectIsLoading } from '../loading/selectors';
import { CHANGE_PASSWORD_REQUEST } from './actionTypes';

const makeSelectIsChangePasswordPending = () =>
  makeSelectIsLoading(CHANGE_PASSWORD_REQUEST);

export { makeSelectIsChangePasswordPending };
