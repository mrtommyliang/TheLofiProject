import React from 'react';
import '../css/Register.css'

// This component handles our register form
const Register = (props) => {
console.log('reg',props)
  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister}>
        <input name="username" type="text" placeholder="Username" className="username" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" placeholder="Password" className="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;