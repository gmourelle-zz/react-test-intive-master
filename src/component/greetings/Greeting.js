import React from 'react';
import moment from 'moment';
import "./Greeting.css";

function Greeting(props) {

  const today = moment();
  const currentAge = moment().diff(`${props.dataForm[0].dob}`, 'years');
  const dataForm= props.dataForm;

  return (
    <h4 className="greeting">
      Hello <span id="name">{dataForm[0].name}</span> <span id="lastName">{dataForm[0].surname}</span> from <span id="country">{dataForm[0].country}</span>, 
      on {today.date()} of {today.month()+1} you'll have <span id="age">{currentAge+1}</span>
    </h4>
  )
}

export default Greeting;