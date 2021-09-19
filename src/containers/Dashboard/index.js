import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router';
import Doctors from 'containers/Doctors';
import Doctor from 'containers/Doctor';

function Dashboard() {
  let { path } = useRouteMatch();

  return (
    <main>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Switch>
        <Redirect exact from={path} to={`${path}/doctors`} />
        <Route exact path={`${path}/doctors`} component={Doctors} />
        <Route exact path={`${path}/doctors/:id`} component={Doctor} />
      </Switch>
    </main>
  );
}

export default Dashboard;
