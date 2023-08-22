import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import close from '../assets/X.svg'
import dashboard from '../assets/dashboard.svg'
import profile from '../assets/profile.svg'
import appointment from '../assets/appointment.svg'
import message from '../assets/message.svg'
import team from '../assets/team.svg'
import calendar from '../assets/calendar.svg'
import setting from '../assets/setting.svg'

function Menu({ toggleMenu }) {

  return (
    <div className='overlay'>
      <div className='menu'>
        <div className='d-flex justify-content-between align-items-center mx-3 my-2 mb-4'>
          <img src={logo} alt='logo' />
          <img src={close} alt='close' onClick={toggleMenu} />
        </div>
        <div className='mx-3 mb-5'>
          <div className="menu-title mb-3">Guest User</div>
          <div className="menu-detail text-gray-900 mb-3">You are using account as Guest User. To book appointment you need to login or sign up to continue</div>
          <button className='secondary-btn me-2'>Login</button>
          <button className='primary-btn'>Signup</button>
        </div>
        <nav className="d-flex flex-column gap-2">
          <a className="menu-link">
            <img src={dashboard} alt='dashboard' />
            <span className="menu-text">Dashboard</span>
          </a>
          <a className="menu-link">
            <img src={profile} alt='profile' />
            <span className="menu-text">Profile</span>
          </a>
          <a className="menu-link">
            <img src={appointment} alt='appointment' />
            <span className="menu-text">Appointment</span>
          </a>
          <a className="menu-link">
            <img src={message} alt='messages' />
            <span className="menu-text">Messages</span>
            <span className="sidebar-message-chip">9</span>
          </a>
          <a className="menu-link">
            <img src={team} alt='team' />
            <span className="menu-text">Team Members</span>
          </a>
          <a className="menu-link">
            <img src={calendar} alt='calendar' />
            <span className="menu-text">Calender</span>
          </a>
          <a className="menu-link">
            <img src={setting} alt='setting' />
            <span className="menu-text">Setting</span>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Menu
