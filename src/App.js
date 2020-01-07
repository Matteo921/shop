import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';

import NotFound from './components/pages/NotFound/NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};

export default App;