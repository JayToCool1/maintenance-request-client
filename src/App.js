import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Requests from './pages/Requests';
import AddRequest from './pages/AddRequest';
import UpdateRequest from './pages/UpdateRequest';
import NoContent from './pages/NoContent';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Requests} />
      <Route path="/add" component={AddRequest} />
      <Route path="/update/:id" component={UpdateRequest} />
      <Route component={NoContent} />
    </Switch>
  </Router>
);

export default App;

