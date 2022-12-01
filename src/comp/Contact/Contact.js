import React from 'react'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import "./Contact.scss"

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='title'>
            Contact Us
        </div>
        <div className='subtitle'>
        Feel free to reach out if you wanna work
        with us, or simply have a chat.
        </div>
        <div className='form'>
            <div className='input'>
                <AiOutlineUser />
                <input type={"text"} placeholder="Name" />
            </div>
            <div className='input'>
                <AiOutlineMail />
                <input type={"text"} placeholder="Mail" />
            </div>
            <div className='input'>
                <BiMessageRounded />
                <input type={"text"} placeholder="Message" />
            </div>
            <button>
                Send Request
            </button>
        </div>
    </div>
  )
}

export default Contact