import React from 'react'
import Logo from "../../assets/images/logo2.png";
import { Link } from 'react-router-dom';
const ResultHeader = () => {
    return (
        <div>
        <img className='result-header-logo' src={Logo} alt="Logo" />
        <Link to="/">
           <p className='result-header-logo-p'>Go Home Page</p>
        </Link>
            
        </div>
    )
}

export default ResultHeader
