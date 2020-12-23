import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value})
}
submitHandler = (e)=>{
  e.preventDefault()
  console.log(this.state)
  axios.post('http://localhost:1337/auth/local/register', this.state)
  .then(response => {
    console.log('Well done!');
    console.log('User profile', response.data.user.name);
    console.log('User token', response.data.jwt);
  })
  .catch(error=>{
    console.log(error)
  })
}
  render() {
    const {username, email, password} = this.state
    return(
      <div className="maincontent">
        <div className="heading"><h4>Register</h4></div>
        <div className="desc">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>
        <div className="contact-form">
          <div className="contact">
            <form id="register-form" method="POST" onSubmit={this.submitHandler}>
              <div className="form-label">
                Username
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="username" value={username} onChange={this.changeHandler}/>
              </div>
              <div className="form-label">
                Email
              </div>
              <div className="form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={this.changeHandler}/>
              </div>
              <div className="form-label">
                Password
              </div>
              <div className="form-group">
              <input type="password" className="form-control" aria-describedby="emailHelp" name="password" value={password} onChange={this.changeHandler}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }


  
}

