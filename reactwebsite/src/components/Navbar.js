import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showbutton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {showbutton();}, []);

    window.addEventListener('resize', showbutton);

    return (
<>
<nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WinSomeMinds <i className="fad fa-wind-turbine"/>
        </Link> 
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
             <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
             </Link>             
        </li>
        <li className='nav-item'>
             <Link to='/company' className="nav-links" onClick={closeMobileMenu}>
                Company
             </Link>    
        </li>
        <li className='nav-item'>
             <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                Services
             </Link>    
        </li>
        <li className='nav-item'>
             <Link to='/contactus' className="nav-links-mobile" onClick={closeMobileMenu}>
                Contact Us
             </Link>                      
         </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
    </div>
</nav>
</>
        )
}

export default Navbar;