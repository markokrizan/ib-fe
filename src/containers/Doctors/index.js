import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DoctorPreview from 'components/DoctorPreview';
import Doctor from 'containers/Doctor';
import useDoctors from 'hooks/useDoctors';

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
  const { doctors, doctorsError } = useDoctors();

  if (doctorsError) {
    return <span>Error loading doctors!</span>;
  }

  if (!doctors?.content?.length) {
    return null;
  }

  return doctors?.content?.map((doctor) => (
    <DoctorPreview key={doctor.id} doctor={doctor} />
  ));
};

export default Doctors;
