import React from 'react'
import Logo from "../../assets/images/HeaderLogo.jpg"

const Header = () => {
    return (
        <div>
            <img className='header-logo' src={Logo} alt="Logo" />
            <p className='header-p'>Search web app</p>
        </div>
    )
}

export default Header
