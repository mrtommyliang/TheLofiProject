import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './css/App.css'
import { withRouter } from 'react-router';
import Header from './Components/Header'
import Home from './Components/Home'
import { 
  loginUser, 
  registerUser, 
  verifyUser,
  showSong,
  showSongItem,
  putSong,
  destroySong,
  putSongUser
} from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    currentUser: null,
    users: [],
    songs: [],
    favorites: [],
    songItem: null,
    formData: {
        name: ""
      },
    authFormData: {
        username: "",
        password: ""
      }
    }
  }
// Favorites Function
getFavorites = (e) => {
  // e.preventDefault()
  this.setState({
    favorites: [...this.state.favorites, e]
  })
  alert('Added to Favorites!')
}


  // Function to get all songs from API
  getSong = async () => {
    const songs = await showSong();
    this.setState({ songs })
  }

  // Function to get a single food item from our API
  getSongItem = async (id) => {
    const songItem = await showSongItem(id);
    this.setState({ songItem })
  }


  handleLoginButton = () => {
      this.props.history.push("/login")
    }

  componentDidMount = async () => {
    await this.getSong()
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
        favorites={this.state.favorites}
        getFavorites={this.getFavorites}
        handleLogin={this.handleLogin}
        authHandleChange={this.authHandleChange}
        authFormData={this.state.authFormData}
        handleRegister={this.handleRegister}
        songs={this.state.songs}/>
      </div>
    );
  }
}


export default withRouter(App);