import React, { Component } from 'react'
import { Container } from 'reactstrap'
import TableComponent from '../components/TableComponent'

export default class HomeContainers extends Component {
    render() {
        return (
            <Container>
                <TableComponent users={this.props.users} />
            </Container>
                
        )
    }
}
