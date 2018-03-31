import React, { Component } from 'react'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import InputForm from './component/form/InputForm';
import RecordNameList from './component/recordNameList/RecordNameList';
import Greeting from './component/greetings/Greeting';
import { Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
        countries: [],
        dataFormulario: []
    };

}

componentDidMount() {

  let initialCountries = [];
  fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
          return response.json();
      }).then(data => {
        initialCountries = data.map((country) => {
          return country
      });
      this.setState({
        countries: initialCountries,
      });
  });
}

handleSubmit (dataForm) {
  this.setState({
    dataFormulario: [dataForm]
  });
}

renderGreeting(selected) {
  if (Object.keys(selected).length === 0) return;

  return (
    <Greeting dataForm={selected}/>
  )
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Intive - FDV Exercise</h1>          
        </header>
        <Container>
        <Row>
        <Col xs="6">          
        <InputForm state={this.state}
        onHandleSubmit={this.handleSubmit.bind(this)}/>     
        <Col xs="12">           
              {this.renderGreeting(this.state.dataFormulario)}
          </Col>
        </Col>
        <Col xs="6">
         <RecordNameList dataForm={this.state.dataFormulario}/>
         </Col>
      </Row>
      </Container>
        <footer className="App-footer">
        <div className="float-right">       
          <span>Guido Mourelle</span>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
