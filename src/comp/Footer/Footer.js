import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Social Media'>
            <div className='title'>
                Social Media
            </div>
            <ul>
                <li>Instagram</li>
                <li>Pinterest</li>
                <li>Twitter</li>
            </ul>
        </div>
        <div className='rights'>
        © Hover 2022, <br/>
All Rights Reserved
        </div>
        <div className='adress'>
            <span>Office</span>
            <p>4588 Dogwood Lane,<br/>
Green Valley, Arizona, 85614<br/>
United States</p>
        </div>
    </div>
  )
}

export default Footer