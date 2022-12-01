import React from 'react'
import "./About.scss"
const About = () => {
  return (
    <div className='About'>
        <div className='rightSide'>
            <img src='img2.png'/>
        </div>
        <div className='leftSide'>
            <div className='titles'>
                <div className='title'>About us</div>
                <div className='subtitle'>A friendly bunch of thinkers & designers who constantly love to delivering good stuff. </div>
            </div>
            <div className='numbers'>
                <ul>
                    <li>
                        <span>10</span>
                        <label>Years of experience</label>
                    </li>
                    <li>
                        <span>65</span>
                        <label>Projects completed</label>
                    </li>
                    <li>
                        <span>23</span>
                        <label>Awards gained</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About