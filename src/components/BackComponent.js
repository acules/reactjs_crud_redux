import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
            <Link to={"/"}>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> Back
                </Button>
            </Link>
            </Col>
        </Row>
    )
}
