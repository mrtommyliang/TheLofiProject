import React from 'react';
import '../css/Register.css'

// This component handles our register form
const Register = (props) => {
console.log('reg',props)
  return (
    <div>
      <form onSubmit={props.handleRegister}>
      <h1>Register</h1>
        <input name="username" type="text" placeholder="Username" className="username" value={props.authFormData.username} onChange={props.authHandleChange} />
        <input name="password" type="password" placeholder="Password" className="password" value={props.authFormData.password} onChange={props.authHandleChange} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;