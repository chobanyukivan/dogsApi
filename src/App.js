import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContainerBreedList from './components/BreedList/index';

import MainMnu from './components/MainMnu/MainMnu';
import Main from './components/Main/Main';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <h1 className="title__h1">myDogApp</h1>
      <MainMnu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/breeds" component={ContainerBreedList} />
      </Switch>
    </Fragment>
  </Router>
);
export default App;
