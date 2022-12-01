import React from 'react'
import "./Services.scss"
const Services = () => {
  return (
    <div className='Service'>
        <div className='leftSide'>
            <div className='title'>
                How we do it
            </div>
            <div className='subtitle'>
                We focus on proper space planning, as well as the aesthetics.
            </div>
            <p>
                We create functional, safe, and aesthetically pleasing spaces by assessing space requirements, determining optimal furniture placement, and selecting decorative items, all while adhering to relevant blueprint, building code, and inspection requirements.
            </p>
        </div>
        <div className='righSide'>
            <img src='./img3.png' />
        </div>
    </div>
  )
}

export default Services