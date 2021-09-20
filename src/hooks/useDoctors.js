import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from 'store/doctor/actions';
import {
  makeSelectDoctors,
  makeSelectDoctorsError,
  makeSelectIsDoctorsLoading,
} from 'store/doctor/selectors';

const useDoctors = (options = { shoudFetch: true }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (options.shoudFetch) {
      dispatch(getDoctors());
    }
  }, []);

  const doctors = useSelector(makeSelectDoctors());
  const doctorsLoading = useSelector(makeSelectIsDoctorsLoading());
  const doctorsError = useSelector(makeSelectDoctorsError());

  return { doctors, doctorsLoading, doctorsError };
};

export default useDoctors;
