import React, { Component } from 'react'
import { CardBody } from 'reactstrap'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

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
    ],
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}
