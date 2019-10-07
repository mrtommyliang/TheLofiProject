import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './Components/Login'
import Register from './Components/Register';
import Header from './Components/Header'
import Home from './Components/Home'


import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper';


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
        <Header currentUser= {this.state.currentUser} />
        <header>
          <Link to='/'><h1></h1></Link>
          {this.state.currentUser
            ?
            <div>
              <h3>Hello {this.state.currentUser && this.state.currentUser.username}<button onClick={this.handleLogout}>logout</button></h3>
              <Link to="/home">Home</Link>
              <hr />
            </div>
            :
            <button onClick={this.handleLoginButton}>Login/register</button>
          }
        </header>

        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/home" render={(props) => (
          <Home/> )} />
          <Home />
      </div>
    );
  }
}


export default withRouter(App);