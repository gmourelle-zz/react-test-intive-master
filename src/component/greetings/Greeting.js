import React from 'react';
import moment from 'moment';

function Greeting(props) {

  const bornDate = moment(`${props.dataForm.dob}`, "YYYY-MM-DD");
  const today = moment();
  const currentAge = moment().diff(`${props.dataForm[0].dob}`, 'years');
  const dataForm= props.dataForm;

  return (
    <h4 className="greeting">
      Hello <span id="name">{dataForm[0].name}</span> from <span id="country">{dataForm[0].country}</span>, 
      on {today.date()} of {today.month()+1} you'll have <span id="age">{currentAge+1}</span>
    </h4>
  )
}

export default Greeting;