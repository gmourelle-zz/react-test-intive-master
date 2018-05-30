import React, { Component } from 'react'; 
import { Container, Row, Col} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import './App.css';
import InputForm from './../component/form/InputForm';
import VisitorList from './../component/visitorList/VisitorList';
import Greeting from './../component/greetings/Greeting';
import * as actions from './../store/actions/register-action';

class GreetingsContainer extends Component {
  constructor() {
    super();
    this.state = {
        countries: [],
        dataForm: [],
        currentUser:{}
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
      //get_Countries;
      this.props.actions.getCountries(initialCountries);
        //actions.get_Countries();
          // const action = {type:'GET_COUNTRIES', value: initialCountries};
          //store.dispatch(actions.get_Countries);
          
});
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
              <InputForm  countries={this.state.countries}
                          onHandleSubmit={this.handleSubmit.bind(this)}
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

//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
// export default connect(
//   null,
//   mapDispatchToProps
// )(GreetingsContainer)
// const mapDispatchToProps = dispatch =>  {
//     return {
//         countries: country => dispatch(getCountries)
//     };
// };

export default connect(null, mapDispatchToProps)(GreetingsContainer);


//export default GreetingsContainer;
