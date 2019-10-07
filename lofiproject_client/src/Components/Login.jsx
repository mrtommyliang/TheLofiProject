import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <h1>Login</h1>
        <input name="username" type="text" placeholder="Username" placeholder="Username" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" placeholder="Password" placeholder="Password" value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
