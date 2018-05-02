import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import "./Greeting.css";

const Greeting = (props) => {

  const today = moment();
  const currentAge = moment().diff(`${props.dataForm.dob}`, 'years');
  const dataForm= props.dataForm;

  return (
    <h4 className="greeting">
      Hello <span id="name">{dataForm.name}</span> <span id="lastName">{dataForm.surname}</span> from <span id="country">{dataForm.country}</span>, 
      on {today.date()} of {today.month()+1} you'll have <span id="age">{currentAge+1}</span>
    </h4>
  )
}

Greeting.propTypes = {
  dataForm: PropTypes.object.isRequired,
};

export default Greeting;