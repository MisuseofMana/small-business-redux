import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import cookie from 'cookie'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const cookies = cookie.parse(document.cookie)
const Navigation = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Businesses
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {
                    cookies["loggedIn"] ?  
                    <li className="nav-list-item">
                        <Link to="/addlisting">Add Listing</Link>
                    </li>
                    : null
                    }

                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation