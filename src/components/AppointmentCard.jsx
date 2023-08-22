import React from 'react'

function AppointmentCard(props) {

  const {name, status, dateTime, remaining, detail} = props;

  return (
    <div className="appointment-card">
      <div className="appointment-card-title">Upcomming Appointment</div>
       <div className="appointment-card-name">{name}</div>
       <p className="appointment-card-status"> {status} | {dateTime} | {remaining} </p>
       <p className="appointment-card-detail">{detail}</p>
    </div>
  )
}

export default AppointmentCard