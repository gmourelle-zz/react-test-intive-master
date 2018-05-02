import React from 'react';
import { Container, ListGroup, Row, Col, Label } from 'reactstrap';
import './VisitorList.css';
import Visitor from '../visitor/Visitor';
import PropTypes from 'prop-types';

const VisitorList = (props) => {

    const handleVisitorClick = (user) =>{
      props.onSelectedUser(user);
  };

    return(
      <Container>
      {
        props.dataForm.length ?    
          <ListGroup className="visitor-list" >  
              <Row>
              <Col xs="4">
                  <span><strong>Name</strong></span>
                </Col>
                <Col xs="4">
                  <span><strong>Country</strong></span>
                </Col>
                <Col xs="4">
                  <span><strong>DOB</strong></span>
                </Col>
              </Row>
              {props.dataForm.map((user, i) =>
                <Visitor
                  onVisitorClick={() => handleVisitorClick(user) }
                  key={i}
                  user={user}
                />
              )}
          </ListGroup>
          :
            <ListGroup className="visitor-list">
              <Label className="visitor-list-title">Any registered yet</Label>
            </ListGroup>
        }      
      </Container>
    );
}

VisitorList.propTypes = {
  dataForm: PropTypes.array.isRequired,
};

export default VisitorList;