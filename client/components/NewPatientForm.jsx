import React from 'react'
import uuid from 'uuid/v4'

export default class NewPatientForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name: "",
      time: 1200,
      kind: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createPatient({
      patientName: this.state.name, 
      patientId: uuid(), 
      appTime: this.state.time, 
      patientKind: this.state.kind});
    this.setState({
      name: "",
      time: 1200,
      kind: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
        placeholder="Enter Patient Name"
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input 
        placeholder="Enter APP Time"
        type="decimal"
        name="time"
        value={this.state.time}
        onChange={this.handleChange}
        />
        <input 
        placeholder="Enter Patient Kind"
        type="text"
        name="kind"
        value={this.state.kind}
        onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}