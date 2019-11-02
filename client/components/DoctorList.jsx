import React, { Component } from 'react'

export default class DoctorList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
          {this.props.name}
          <br></br>
          <button className="btn btn-primary">Select</button>
          </li>
        </ul>
      </div>
    )
  }
}
