import React from 'react'
import "./Team.scss"
const Team = () => {
  return (
    <div className='Team'>
        <div className='title'>Our Team</div>
        <div className='subtitle'>We are a team making stylish, minimal, modern projects and creating unique experiences</div>
        <ul>
            <li>
                <img src='./team/pic1.png'/>
                <label>Terry Siphron</label>
                <span>Interior Designer</span>
            </li>
            <li>
                <img src='./team/pic2.png'/>
                <label>Kadin Rosser</label>
                <span>Interior Decorator</span>
            </li>
            <li>
                <img src='./team/pic3.png'/>
                <label>Miracle Vetrovs</label>
                <span>Project Manager</span>
            </li>
        </ul>
    </div>
  )
}

export default Team