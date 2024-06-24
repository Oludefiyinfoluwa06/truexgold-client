import React from 'react';
import '../assets/styles.css';
import Cup from '../assets/img/cup.png';
import { FaGreaterThan } from "react-icons/fa";


const RankButton = () => {
  return (
    <div>
        <a className='CupBtn'>
            <img src={Cup} alt="cup" />
            <p>Master</p>
            <FaGreaterThan />
        </a>
    </div>
  )
}

export default RankButton