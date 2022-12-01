import React from 'react'

import { FiPlay } from 'react-icons/fi';

import "./Home.scss"
const Home = () => {
  return (
    <div className='Home'>
        <div className='leftSide'>
            <header>
                <div className='logo'>
                    Hover
                </div>
                <div className='listItem'>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
            <div className='title'>We Make An Interior Design For Your Home.</div>
            <div className='subtitle'>Here at Glimmer, we focus on making a comfortable place for you, your family and friends.</div>
            <button className='button'>
                <label>Watch Demo</label>
                <FiPlay /> 
            </button>
        </div>
        <div className='rightSide'>
            <img src='./img1.png' alt='Home Image'/>
        </div>
    </div>
  )
}

export default Home