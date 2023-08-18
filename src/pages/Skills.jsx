import React from 'react'
import './Skills.css'
import { FaReact } from 'react-icons/fa'
import { SiRedux, SiJavascript } from 'react-icons/si'
import { ImHtmlFive } from 'react-icons/im'
import { BsFiletypeCss } from 'react-icons/bs'

function Skills() {
const style={
  fontSize: '1.1rem'
}

  const skills = [
    ['ReactJs', <FaReact style />],
    ['Redux', <SiRedux style/>],
    ['Javascript', <SiJavascript style/>],
    ['HTML', <ImHtmlFive style/>],
    ['CSS', <BsFiletypeCss style/>],
  ]

  return (
    <section className='skills' id='skills'>
      <h1
        style={{ color: 'white', marginBottom: '1rem' }}
      >Top Skills</h1>
      <ul>
        {skills.map(skill => {
          return (
            <li key={skill[0]}>
              {skill[0]}
              <i>{skill[1]}</i>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills