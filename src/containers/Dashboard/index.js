import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router';
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
        <Route exact path={`${path}/doctors`} component={Doctors} />
      </Switch>
    </main>
  );
}

export default Dashboard;
