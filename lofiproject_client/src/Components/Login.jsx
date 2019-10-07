import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'


// This component handles our login form and has a link to the register form
const Login = (props) => {
  console.log('login props', props)
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <h1>Login</h1>
        <input name="username" type="text" placeholder="Username" onChange={props.authHandleChange} value={props.authFormData.username}  />
        <input name="password" type="password" placeholder="Password" onChange={props.authHandleChange} value={props.authFormData.password}  />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
