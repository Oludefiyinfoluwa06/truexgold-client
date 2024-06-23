import React from 'react';
import "../assets/styles.css"
import { FaTelegram, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





const StayTuned = () => {
  return (
    <div className='socials'>
        <p>Stay Tuned</p>

        <div className="media">
            <FaTelegram size={30}/>
            <FaYoutube size={30}/>
            <FaXTwitter size={30}/>
        </div>
    </div>
  )
}

export default StayTuned