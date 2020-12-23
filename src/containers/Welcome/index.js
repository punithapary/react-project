import React, { Component } from 'react';
import axios from "axios";

export default class Welcome extends Component {
  // State of your application
  state = {
    page: [],
    error: null
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      //this.setState({ restaurants: response })

  const response = await axios.get('http://localhost:1337/pages/?title=Welcome');
    console.log(response.data[0]);

  this.setState({ page: response.data[0]})
    } catch(error) {
      this.setState({ error })
    }
  }
  render() {
    const { error, page } = this.state

    // Print errors if any
    if (error) {
       return <div>An error occured: {error.message}</div>
    }
    return(
      <div className="maincontent">
         <div className="heading">
           <h2>{page.title}</h2>
         </div>
        <div>{page.description}</div>
      </div>
    )
  }
}