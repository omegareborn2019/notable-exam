import React from 'react';
import PatientListEntry from './PatientListEntry.jsx';
import NewPatientForm from './NewPatientForm.jsx';
import $ from 'jquery'

export default class PatientList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      patients: []
    }
    this.createPatient = this.createPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }

  componentDidMount(){
    $.ajax({
      url: "/appointment",
      type: 'GET',
      success: (data)=>{
        console.log(data);
        this.setState({
          patients: data
        })
      }
    })
  }
  
  createPatient(newPatient){
    $.ajax({
      url: '/appointment',
      type: 'POST',
      data: newPatient,
      statusCode: {
        200: (data) =>{
          console.log(data);
        },
        400: ()=>{
          console.log("post err from client")
        }
      }
    })
    this.setState({
      patients: [...this.state.patients, newPatient]
    })
  }

  deletePatient(id){
    const newPatients = this.state.patients.filter(patient =>{
      return patient.patientId !== id;
    })
    this.setState({
      patients: newPatients
    })
    // send delete request to the server
    $.ajax({
      url: "/appointment",
      type: 'DELETE',
      data: {"id": id},
      statusCode: {
        204: () =>{
          console.log("patient has been deleted from the database");
        },
        400: () =>{
          console.log("delete error from client");
        }
      }
    });
  }

  render(){
    const patients = this.state.patients.map((patient, index) =>{
      return <PatientListEntry 
      key={index}
      id={patient.patientId}
      name={patient.patientName}
      time={patient.appTime}
      kind={patient.patientKind}
      createPatient={this.createPatient}
      deletePatient={this.deletePatient}
      updatePatient={this.updatePatient}
      />
    })
    return(
      <div className="container">
          <NewPatientForm createPatient={this.createPatient} />
        <p></p>
        <ul className="list-group">
          {patients}
        </ul>
      </div>
    )
  }
}