import React, { Component } from 'react';
import axios from 'axios';

export default class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Message: ''
    }
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value})
}
submitHandler = (e)=>{
  e.preventDefault()
  console.log(this.state)
  axios.post('http://localhost:1337/contact-forms', this.state)
  .then(response => {
    alert("Thank you for your message")  })
  .catch(error=>{
    console.log(error)
  })
}
  render() {
    const {Name, Email, Message} = this.state
    return(
      <div className="maincontent">
        <div className="heading"><h4>Contact Us</h4></div>
        <div className="desc">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>
        <div className="contact-form">
          <div className="contact">
            <form id="contact-form" method="POST" onSubmit={this.submitHandler}>
              <div className="form-label">
                Name
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="Name" value={Name} onChange={this.changeHandler}/>
              </div>
              <div className="form-label">
                Email
              </div>
              <div className="form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" name="Email" value={Email} onChange={this.changeHandler}/>
              </div>
              <div className="form-label">
                Message
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" name="Message" value={Message} onChange={this.changeHandler}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }


  
}

