import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'

import './Style/Header.css'
import { Avatar } from '@material-ui/core'

function Header() {

    const [inputSearch, setInputSearch] = useState('')
    
    return (
        <div className="header">
            <div className="left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" alt="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" src="https://static.wixstatic.com/media/c73978_ee692689132343baab03477e868246ea~mv2.jpg" />
                </Link>
            </div>

            <div className="header__input">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder=" Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__profileImage"
                    src="https://yt3.ggpht.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ=s88-c-k-c0xffffffff-no-rj-mo"
                    alt="profile_image" />
            </div>

        </div>
    )
}

export default Header
