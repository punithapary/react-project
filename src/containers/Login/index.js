import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: ''
    }
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value})
}
submitHandler = (e)=>{
  e.preventDefault()
  console.log(this.state)
  axios.post('http://localhost:1337/auth/local/', this.state)
  .then(response => {
    this.props.history.push("/blog");
  })
  .catch(error=>{
    console.log(error)
  })
}
  render() {
    return(
      <div className="maincontent">
        <div className="heading"><h4>Login Here !!!</h4></div>
        <div className="login-form">
          <div className="contact">
            <form id="contact-form" method="POST" onSubmit={this.submitHandler}>
              <div className="form-label">
                Username
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="identifier" onChange={this.changeHandler} />
              </div>
              <div className="form-label">
                Password
              </div>
              <div className="form-group">
                <input type="password" className="form-control" aria-describedby="emailHelp" name="password" onChange={this.changeHandler} />
              </div>             
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

