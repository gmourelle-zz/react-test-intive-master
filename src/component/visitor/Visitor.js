import React from 'react';
import { Row, Col, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import './Visitor.css';


const Visitor = (props) => { 

    const {onVisitorClick}= props;
    return (
        <ListGroupItem onClick={onVisitorClick} className="visitor">
            <Row>
                <Col xs="4">
                    <span> {props.user.name} {props.user.surname}</span>
                </Col>
                <Col xs="4">
                    <span>{props.user.country}</span>
                </Col>
                <Col xs="4">
                    <span>{props.user.dob}</span>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

Visitor.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Visitor;