import React, { Component } from 'react'

export default class DoctorList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}
