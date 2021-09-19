import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, useRouteMatch, Redirect, Route } from 'react-router';
import Doctors from 'containers/Doctors';

function Dashboard() {
  let { path } = useRouteMatch();

  return (
    <main>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Switch>
        <Redirect exact from={path} to={`${path}/doctors`} />
        <Route path={`${path}/doctors`} component={Doctors} />
      </Switch>
    </main>
  );
}

export default Dashboard;
