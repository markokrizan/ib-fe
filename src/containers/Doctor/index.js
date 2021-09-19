import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from 'store/doctor/actions';
import {
  makeSelectDoctor,
  makeSelectIsDoctorLoading,
  makeSelectDoctorError,
} from 'store/doctor/selectors';
import DoctorPreview from 'components/DoctorPreview';
import { useParams } from 'react-router';

const Doctor = () => {
  const { id: doctorId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctor(doctorId));
  }, []);

  const doctor = useSelector(makeSelectDoctor());
  const doctorLoading = useSelector(makeSelectIsDoctorLoading());
  const doctorError = useSelector(makeSelectDoctorError());

  if (doctorLoading) {
    return <span>Loading...</span>;
  }

  if (doctorError) {
    return <span>Error loading doctors!</span>;
  }

  if (!doctor) {
    return null;
  }

  return <DoctorPreview doctor={doctor} />;
};

export default Doctor;
