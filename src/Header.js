import React from 'react'

import './Header.css';

import { useDataLayerValue } from './DataLayer';

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
    
    const [{ user }, dispatch] = useDataLayerValue(); 
    return (
        <div className="header"> 
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artistis, Songs, or Podcasts" type="text"/>
            </div>

            <div className="header__right">
                <h4>{user?.display_name}</h4>
                <Avatar src={user?.images[0]?.url} alt="Ahad Khan" />
            </div>
        </div>
    )
}

export default Header;