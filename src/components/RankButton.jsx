import React from 'react';
import '../assets/styles.css';
import Cup from '../assets/img/cup.png';
import { FaGreaterThan } from "react-icons/fa";


const RankButton = () => {
  return (
    <div className='CupBtn'>
        <a className='innerBtn'>
            <img src={Cup} alt="cup" />
            <p>Master</p>
            <FaGreaterThan size={6} />
        </a>
    </div>
  )
}

export default RankButton