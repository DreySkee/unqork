import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from './Form';

const LogIn = (props) => {

  const userLogged = localStorage.getItem("userLogged");

  if (userLogged === 'true') {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="form-container">
      <h2>Log In</h2>
      <Form  />
    </div>
  );
}

export default LogIn;
