import React from 'react'
import "./Project.scss"
const Project = () => {

  return (
    <div className='Project'>
        <h1>
        Check out our recently <br/>added projects
        </h1>
        <ul className='projectsPics'>
            <li>
                <img src='./project/img1.png' />
            </li>
            <li className='containBtn'>
                <img src='./project/img2.png' />
                <div className='roundedBtn'>
                    View All
                </div>
            </li>
            <li>
                <img src='./project/img3.png' />
            </li>
            
        </ul>
    </div>
  )
}

export default Project