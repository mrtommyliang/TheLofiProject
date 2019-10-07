import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './Components/Header'
import Home from './Components/Home'
import { loginUser, registerUser, verifyUser } from './services/api-helper';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    currentUser: null,
    formData: {
        name: ""
      },
    authFormData: {
        username: "",
        password: ""
      }
    }
  }

  handleLoginButton = () => {
      this.props.history.push("/login")
    }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
    currentUser: null
    })
  }


  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { [name]: value } });
  }

  render() {
    return (
      <div className= 'App'>
        <Header currentUser= {this.state.currentUser}
        handleLogout={this.handleLogout} 
        handleLoginButton={this.handleLoginButton}
        authHandleChange={this.authHandleChange}/>

        
        <Home 
        handleLogin={this.handleLogin}
        authHandleChange={this.authHandleChange}
        authFormData={this.state.authFormData}
        handleRegister={this.handleRegister}/>

      </div>
    );
  }
}


export default withRouter(App);