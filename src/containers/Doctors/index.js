import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from 'store/doctor/actions';
import {
  makeSelectDoctors,
  makeSelectDoctorsError,
  makeSelectIsDoctorsLoading,
} from 'store/doctor/selectors';
import DoctorPreview from 'components/DoctorPreview';

const Doctors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const doctors = useSelector(makeSelectDoctors());
  const doctorsLoading = useSelector(makeSelectIsDoctorsLoading());
  const doctorsError = useSelector(makeSelectDoctorsError());

  if (doctorsLoading) {
    return <span>Loading...</span>;
  }

  if (doctorsError) {
    return <span>Error loading doctors!</span>;
  }

  if (!doctors?.content) {
    return null;
  }

  return doctors?.content?.map((doctor) => (
    <DoctorPreview key={doctor.id} doctor={doctor} />
  ));
};

export default Doctors;
