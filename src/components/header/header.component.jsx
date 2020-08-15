import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';

const Header = ({scrollLocation}) => {
    const [headerColour, setHeaderColour] = useState('white')
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(scrollLocation)
    useEffect(() => {
        // if(window.location.pathname.length == 1 || window.location.pathname.length == 0 || window.location.pathname === "/index.html" || window.location.pathname === "/index"){

        // }
        if (scrollLocation > 20) {
            setHeaderColour('black')
        } else {
            setHeaderColour('white')
        }

    }, [scrollLocation])

    return (
        <div className={`header ${headerColour}`}>
            <Link className={`logo-container`} to='/'>
                <h1 className={`header-logo`}> CONSULT NAME </h1>
            </Link>
            <div className={`options`}>
                <div className={`option`} to='/shop'> Services </div>
                <div className={`option`} to='/shop'> Cases </div>
                <div className={`option`} to='/shop'> Crew </div>
                <div className={`option`} to='/shop'> Blog </div>
                <div className={`option`} to='/shop'> Contact Us </div>
            </div>
        </div>
    )


}
export default Header;