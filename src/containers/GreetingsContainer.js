import React, { Component } from 'react'; 
import { Container, Row, Col} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputForm from './../component/form/InputForm';
import VisitorList from './../component/visitorList/VisitorList';
import Greeting from './../component/greetings/Greeting';
import * as actions from './../store/actions/register-action';

class GreetingsContainer extends Component {
  constructor() {
    super();
    this.state = {
        dataForm: [],
        currentUser:{}
    };
}

componentDidMount() {

    if (this.props.countries.length === 0) {
        //this.props.actions.registerVisitorAction;
        this.props.actions.getCountries();
    }
}

handleSelectedUser = (selected) => {
  this.setState({
    currentUser:selected
  });
};

handleSubmit = (data) => {
    const dataFormCopy = this.state.dataForm.slice();
    dataFormCopy.push(data);

    this.setState({
      dataForm: dataFormCopy,
      currentUser:data
    });
}

renderGreeting = (selected) => {
  if (Object.keys(selected).length === 0) return;
  return (
    <Greeting dataForm={selected}/>
  )
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Exercise</h1>          
        </header>
        <Container>
          <Row>
            <Col xs="6">          
              <InputForm  countries={this.props.countries}
                          onHandleSubmit={this.handleSubmit.bind(this)}
                          onSave={this.props.actions.registerVisitorAction}
            />     
              <Col xs="12">           
                    {this.renderGreeting(this.state.currentUser)}
              </Col>
            </Col>
            <Col xs="6">
              <VisitorList  dataForm={this.state.dataForm} 
                onSelectedUser={this.handleSelectedUser}/>
            </Col>        
          </Row>
          <footer className="App-footer">
            <div className="float-right">       
              <span>Guido Mourelle</span>
            </div>
          </footer>
        </Container>        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export function mapStateToProps({ greetings }) {
    return {
     // visitors: greetings.registrations,
      countries: greetings,
      //user: greetings.currentVisitor,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingsContainer);
