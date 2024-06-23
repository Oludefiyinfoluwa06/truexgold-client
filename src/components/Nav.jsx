import React from 'react';
import { MdCancel } from "react-icons/md";
import '../assets/styles.css';
import { BiAlignMiddle } from "react-icons/bi";



const Nav = () => {
  return (
    <div className='wholeNav'>
            <div className="left">
                <MdCancel size={30}/>
                    <h2>TRUEXGOLD</h2>
            </div>

           
                <BiAlignMiddle />
    </div>
  )
}

export default Nav