import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, Label, Row, Col } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
import './RecordNameList.css';

  class RecordNameList extends React.Component {

  render(){
  return (
    <Container>
    {this.props.dataForm.length >0?
        <ListGroup className="recordname-list">
  
      <Row>
              <Col xs="3">
                <span><strong>Name</strong></span>
              </Col>
              <Col xs="3">
                <span><strong>SurName</strong></span>
              </Col>
              <Col xs="3">
                <span><strong>Country</strong></span>
              </Col>
              <Col xs="3">
                <span><strong>Birthday</strong></span>
              </Col>
            </Row>
      <ListGroupItem
        className="visitor">    
        <Row>
          <Col xs="3">
            <span>{this.props.dataForm[0].name}</span>
          </Col>
          <Col xs="3">
            <span>{this.props.dataForm[0].surname} </span>
          </Col>
          <Col xs="4">
            <span>{this.props.dataForm[0].country}</span>
          </Col>
          <Col xs="2">
            <span> {this.props.dataForm[0].dob}</span>
          </Col>
        </Row>
      
      </ListGroupItem>      
    </ListGroup>
     :
     <ListGroup >
       <Label >Any Greeting</Label>
     </ListGroup>}
     </Container>
  )
}
}
export default RecordNameList;