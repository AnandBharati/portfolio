import React from 'react'
import './Home.css'
import profilepic from '../assets/profilepic.jpg'

function Home() {
  return (
    <div className='home'>
      <div className="left">
        <h1>Anand Bharati</h1>
        <h4>React Js Frontend Developer</h4>
        <p>7.5 Years of total experience in IT industry</p>
      </div>
      <div className="right">
        <div className="profile-pic">
          <img src={profilepic} alt="profile pic" />
        </div>
      </div>
    </div>
  )
}

export default Home