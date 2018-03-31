import React from 'react';
import { Col,Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';


class InputForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = { name: '',surname:'', country: '', dob: '' };
    this.handleSubmit = this.handleSubmit.bind(this);    
  }  
  
  handleChange(inputValue, event) {
    this.setState({ [inputValue]: event.target.value });
  }

  handleOnBindData(e) {
    e.preventDefault();
    this.props.onBindData(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.setState({ name: '',surname:'', country: '', dob: '' });
  }

  renderOptions(countries) {
    return (
      countries.map(country => <option key={country.name}>{country.name}</option>)
    )
  }

  render() {

    let countries = this.props.state.countries;

    return (
      <Form>
        <FormGroup>
          <Row>
            <Col  xs="2">
              <Label className="float-right col-form-label" for="name">Name</Label>
            </Col>
            <Col  xs="10">
              <Input
                value={this.state.name}
                  onChange={e => this.handleChange("name", e)}
                type="text" name="user_name" id="name" />
            </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
              <Col xs="2">
                  <Label className="float-right col-form-label"  for="surname">Surname</Label>
              </Col>
              <Col  xs="10">
                <Input
                  value={this.state.surname}
                  onChange={e => this.handleChange("surname", e)}
                  type="text" name="user_surname" id="surname" />
              </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>          
                <Col  xs="2">
                  <Label className="float-right col-form-label" for="country">Countries</Label>
                </Col>
                <Col  xs="10">
                  <Input
                    value={this.state.country}
                    onChange={e => this.handleChange("country", e)}
                    type="select" name="select_country" id="country">
                    <option>Select a country</option>
                    {this.renderOptions(countries)} 
                  </Input>
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>          
                <Col  xs="2">
                  <Label className="float-right col-form-label" for="edad">Birthday</Label>
                </Col>
                <Col  xs="10">            
                  <Input
                    value={this.state.dob}
                    onChange={e => this.handleChange("dob", e)}
                    type="text" name="age" id="age" />
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={e => this.handleSubmit(e)}
            color="primary">
            Save
        </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default InputForm;