import React from 'react';
import "../assets/styles.css"
import { FaTelegram, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





const StayTuned = () => {
  return (
    <div className='socials'>
        <p>Stay Tuned</p>

        <div className="media">
            <FaTelegram size={45}/>
            <FaYoutube size={45}/>
            <FaXTwitter size={45}/>
        </div>
    </div>
  )
}

export default StayTuned