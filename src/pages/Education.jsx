import React, { useState, useEffect } from 'react'
import './Education.css'

function Education() {
  const [show, setShow] = useState({
    be: false,
    hsc: false,
    ssc: false
  })
  const [activeEdu, setActiveEdu] = useState(null);

  const clickHandler = (e) => {
    const tempShow = {
      be: false,
      hsc: false,
      ssc: false
    }
    tempShow[e.target.name] = !show[e.target.name]
    setShow(() => tempShow);
  }

  const education = {
    be: {
      course: "Bachelor of Engg.",
      spec: "Computer",
      university: 'Mumbai University',
      college: "BR Harne College Of Engg. & Tech., Ambernath",
    },
    hsc: {
      course: "HSC",
      spec: "Science",
      university: 'Maharashtra State board',
      college: "G.V.M Junior College, Thane-west.",
    },
    ssc: {
      course: "SSC",
      spec: "none",
      university: 'Maharashtra State board',
      college: "G.V.M high school, Thane-west",
    }
  }

  useEffect(() => {
    Object.keys(show).forEach((k, v) => {
      show[k] ? setActiveEdu(education[k]) : null;
    })
    console.log(activeEdu)
  }, [show])

  return (
    <section className='education' id="education">
      <h1>Education</h1>
      <i>click on below link for more details</i>
      <form className="collapse">
        <div className="btn-grp">
          <button type="button" name='be' onClick={clickHandler}>BE</button>
          <button type="button" name='hsc' onClick={clickHandler}>HSC</button>
          <button type="button" name='ssc' onClick={clickHandler}>SCC</button>
        </div>
        <div className="content">
          {activeEdu &&
            <table className='be-table' border='0'>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Specialization</th>
                  <th>University</th>
                  <th>College/school</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{activeEdu.course}</td>
                  <td>{activeEdu.spec}</td>
                  <td>{activeEdu.university}</td>
                  <td>{activeEdu.college}</td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </form>
    </section>
  )
}

export default Education