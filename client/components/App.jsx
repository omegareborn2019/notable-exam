import React from 'react';
import PatientList from './PatientList.jsx'
import DoctorList from './DoctorList.jsx'
import uuid from 'uuid/v4';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      doctors: [{name: "Daniel"}, {name: "Alice"}, {name: "Jason"}]
    }
  }
  
  render() {
    const doctors = this.state.doctors.map((doc, index)=>{
      return <DoctorList key={index} id={uuid()} name={doc.name}/>
    })
    return(
      <div>
        {doctors}
        <PatientList />
      </div>
    )
  }
}