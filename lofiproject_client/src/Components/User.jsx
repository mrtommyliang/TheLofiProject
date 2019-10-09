 import React, { Component } from 'react'
 import axios from 'axios'

class User extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      industryType: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = await axios.put(`http://localhost:3000/users/${this.props.currentUser.id}`,
    {
      user: {industry_type: this.state.industryType}
    })
    alert("Updated!")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1 className="login">Update Info</h1>
          <input
            name="industryType"
            type="text"
            placeholder="What industry do you work in?"
            onChange={this.handleChange}
            value={this.state.industryType}
          />
          <button className="logregBtn">Update</button>
        </form>
      </div>
    )
  }
}

export default User