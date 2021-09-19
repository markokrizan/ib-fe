import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import { getDoctors } from 'store/doctor/actions';
import {
  makeSelectDoctors,
  makeSelectDoctorsError,
  makeSelectIsDoctorsLoading,
} from 'store/doctor/selectors';
import DoctorPreview from 'components/DoctorPreview';
import Doctor from 'containers/Doctor';

const Doctors = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={DoctorList} />
      <Route path={`${path}/:id`} component={Doctor} />
    </Switch>
  );
};

const DoctorList = () => {
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
