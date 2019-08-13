import React, { Component } from 'react';

class BandInput extends Component {
  
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  
  handleChange = ev => {
    this.setState({
      name: ev.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={ev => this.handleSubmit(ev)}>
          <label>add band</label>
          <input 
            type='text' 
            onChange={ev => this.handleChange(ev)} 
            value={this.state.name} 
          />
          <input
            type='submit'
          />
        </form>
      </div>
    )
  }
}

export default BandInput;
