import React, { Component } from 'react'
import { CardBody } from 'reactstrap'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import HomeContainers from './containers/HomeContainers';
import CreateUserContainers from './containers/CreateUserContainers';
import DetailUserContainers from './containers/DetailUserContainers';
import EditUserContainers from './containers/EditUserContainers';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainers />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainers />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainers />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainers />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
