import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

import NavBar from './Navbar';

const Header = () => (
    <div>
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="title"
                            color="inherit"
                >
                    My header
                </Typography>
                <NavBar/>
            </Toolbar>
        </AppBar>

    </div>
);

export default Header;