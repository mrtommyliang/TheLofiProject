import React from 'react';
import '../css/Login.css'


// This component handles our login form and has a link to the register form
const Login = (props) => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <h1 className="login">Login</h1>
        <input name="username" type="text" placeholder="Username" onChange={props.authHandleChange} value={props.authFormData.username}  />
        <input name="password" type="password" placeholder="Password" onChange={props.authHandleChange} value={props.authFormData.password}  />
        <button className="logregBtn">Login</button>
      </form>
    </div>
  );
}

export default Login;
