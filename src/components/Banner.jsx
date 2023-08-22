import React from 'react'

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner d-none d-lg-block">
        <p className='banner-title'>Don't have any new appointment?</p>
        <button className="primary-btn">
          <span>Create new</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus d-inline-block" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner
