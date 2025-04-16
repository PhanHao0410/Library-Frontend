import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import path from './constants/clientPath';
import HomePage from './Library/HomePage';
import DetailTypes from './Library/DetailTypes';
import history from './utils/history';
import WarnNoData from './components/WarnNoData';
function App() {
  const s3ConfigPath = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
  if (s3ConfigPath) {
    history.replace(s3ConfigPath);
  }
  return (
    <HashRouter>
      <Switch>
        {/**
         * PUBLIC PATHS
         *  */}
        <Route exact path={path.ROOT} component={HomePage} />
        <Route path="/detailtypebook/:typecode" component={DetailTypes} />
        <Route path="/test" component={WarnNoData} />
        {/**
         * PROTECTED PATHS
         */}
        {/* <ProtectedRoute path={path.ROOT} component={DefaultSidebar} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
