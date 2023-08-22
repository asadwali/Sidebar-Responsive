import React from 'react'
import logo from '../assets/logo.svg'
import dashboard from '../assets/dashboard.svg'
import profile from '../assets/profile.svg'
import appointment from '../assets/appointment.svg'
import message from '../assets/message.svg'
import team from '../assets/team.svg'
import calendar from '../assets/calendar.svg'
import setting from '../assets/setting.svg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="mb-4">
        <img src={logo} alt='logo' />
      </div>
      <nav className="d-flex flex-column gap-2">
        <a className="sidebar-link active">
          <img src={dashboard} alt='dashboard' />
          <span className="sidebar-text d-none d-lg-inline-block">Dashboard</span>
        </a>
        <a className="sidebar-link">
          <img src={profile} alt='profile' />
          <span className="sidebar-text d-none d-lg-inline-block">Profile</span>
        </a>
        <a className="sidebar-link">
          <img src={appointment} alt='appointment' />
          <span className="sidebar-text d-none d-lg-inline-block">Appointment</span></a>
        <a className="sidebar-link">
          <img src={message} alt='messages' />
          <span className="sidebar-text d-none d-lg-inline-block">Messages</span>
          <span className="sidebar-message-chip d-none d-lg-inline-flex">9</span>
        </a>
        <a className="sidebar-link">
          <img src={team} alt='team' />
          <span className="sidebar-text d-none d-lg-inline-block">Team Members</span>
        </a>
        <a className="sidebar-link">
          <img src={calendar} alt='calendar' />
          <span className="sidebar-text d-none d-lg-inline-block">Calender</span>
        </a>
        <a className="sidebar-link">
          <img src={setting} alt='setting' />
          <span className="sidebar-text d-none d-lg-inline-block">Setting</span>
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar;