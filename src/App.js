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
  state = {
    title: "Samsul Tech",
    users: [
      {
        id:1,
        nama:"Boy",
        alamat:"Rawa Panjang, Bekasi",
        umur:21,
        nohp:"0878758585"
      },
      {
        id:2,
        nama:"Andhika",
        alamat:"Pejaten Barat, Pasar minggu",
        umur:28,
        nohp:"0878789959"
      },
      {
        id:3,
        nama:"Dewi",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:4,
        nama:"Anjay",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:5,
        nama:"Brodin",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:6,
        nama:"Cak Sodiq",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:7,
        nama:"Cak Nono",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:8,
        nama:"Marshanda",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:9,
        nama:"Bento",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:10,
        nama:"Arief Naki",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
      {
        id:11,
        nama:"Mpo Marnah",
        alamat:"Jati Asih, Bekasi",
        umur:18,
        nohp:"85959585"
      },
    ],
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainers users={this.state.users} />
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
