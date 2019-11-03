import React from 'react';

export default class PatientListEntry extends React.Component{
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deletePatient(this.props.id)
  }

  render(){
    return(
      <div>
        <li className="list-group-item">
          Name: {this.props.name} ----
          Time: {this.props.time} ----
          Type: {this.props.kind}
        </li>
        <button type="button" className="btn btn-info" onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}