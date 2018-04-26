import React from 'react';
import { Row, Col, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

import './Visitor.css';

Visitor.propTypes = {
    user: PropTypes.object.isRequired,
};
  

function Visitor(props) {
  return (
    <ListGroupItem 
      className="visitor">
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

export default Visitor;