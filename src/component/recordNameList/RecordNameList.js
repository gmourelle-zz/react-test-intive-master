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
          <ListGroupItem>    
            <Row>
              <Col xs="4">
                <span>{this.props.dataForm[0].name} {this.props.dataForm[0].surname}</span>
              </Col>
              <Col xs="4">
                <span>{this.props.dataForm[0].country}</span>
              </Col>
              <Col xs="4">
                <span> {this.props.dataForm[0].dob}</span>
              </Col>
            </Row>          
          </ListGroupItem>      
        </ListGroup>
        :
        <ListGroup >
          <Label >Any Greeting yet</Label>
        </ListGroup>
    }
     </Container>
  )
}
}
export default RecordNameList;