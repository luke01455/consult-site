import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import MenuButton from '../menu-button/menu-button.component'
import MenuModal from '../menu-modal/menu-modal.component'
import './header.styles.scss';

const Header = ({scrollLocation}) => {
    const [headerColour, setHeaderColour] = useState('white')
    const [isHidden, setIsHidden] = useState(true)


    const setHidden = () => {
        setIsHidden(!isHidden)
        console.log(isHidden)
    }

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
                <Link className={`option`} to='/services'> Services </Link>
                <Link className={`option`} to='/cases'> Cases </Link>
                <Link className={`option`} to='/squad'> Squad </Link>
                <Link className={`option`} to='/blog'> Blog </Link>
                <Link className={`option`} to='/contact'> Contact </Link>
            </div>
            <div onClick={() => setHidden()} className='burger-icon-container'><MenuButton hidden={isHidden} /></div>
            <MenuModal hidden={isHidden}/>
        </div>
    )


}
export default Header;