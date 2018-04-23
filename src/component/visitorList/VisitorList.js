import React from 'react';
import { Container, ListGroup, Row, Col, Label } from 'reactstrap';
import './VisitorList.css';
import Visitor from '../visitor/Visitor';

class VisitorList extends React.Component {

  render(){
  return (
    <Container>
    {
      this.props.dataForm.length ?    
        <ListGroup className="visitor-list">  
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
            {this.props.dataForm.map((user, i) =>
              <Visitor
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
  )
  }
} 
export default VisitorList;