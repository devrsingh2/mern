import React from 'react';
import { Switch, Router, Route } from 'react-router';
import {
    List,
    ListItem,
    ListItemText,
    Typography
} from '@material-ui/core';
import { Home, Book, AccountBox } from '@material-ui/icons'

function NavBar(props) {

    return (
        <Router>
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <Typography color="inherit" variant="title">
                            Home <Home />
                        </Typography>
                    </ListItemText>


                    <ListItemText inset>
                        <Typography color="inherit" variant="title">
                            Posts <Book/>
                        </Typography>
                    </ListItemText>


                    <ListItemText inset>
                        <Typography color="inherit" variant="title">
                            Contact <AccountBox/>
                        </Typography>
                    </ListItemText>
                </ListItem >

            </List>
        </Router>
    )
}

export default NavBar;