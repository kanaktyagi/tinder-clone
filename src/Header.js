import { IconButton } from '@material-ui/core'
import React from 'react'
import './Header.css'
import image1 from './image/tinderlogo.jpg'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

             <img className="header__logo"src={image1} alt="tinder"/>
             <IconButton>
             <ForumIcon fontSize="large" className="header__icon" />
             </IconButton>
        </div>
    )
}

export default Header
