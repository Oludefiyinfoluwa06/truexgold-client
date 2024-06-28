import '../assets/styles.css';
import Cup from '../assets/img/cup.png';
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';


const RankButton = () => {
  return (
    <Link to='/rank' className='CupBtn'>
        <a className='innerBtn'>
            <img src={Cup} alt="cup" />
            <p>Master</p>
            <FaGreaterThan size={10} />
        </a>
    </Link>
  )
}

export default RankButton