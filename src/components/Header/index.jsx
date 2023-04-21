import React from "react";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import menuSVG from '../../assets/icons/menu.svg'

import './index.css'
import {Link} from "react-router-dom";

const drawerWidth = 240;
const Header = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
             sx={{textAlign: 'center'}}
        >
            <Typography variant="h6" sx={{my: 2}}>
                CRUD
            </Typography>
            <Divider/>
            <List className='nav__list-mobile'>
                <Link className='nav__link-mobile' to='/'>
                    Home
                </Link>
                <Link className='nav__link-mobile' to='users'>
                    Users
                </Link>
            </List>
        </Box>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <header className='header'>
            <Box sx={{display: 'flex'}}>
                <AppBar
                    component="nav"
                    className='nav'
                    style={{backgroundColor: '#fff'}}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            {/*<MenuIcon/>*/}
                            <img src={menuSVG} alt='close'/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            <Link className='nav__link' to='/'>
                                CRUD
                            </Link>
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            <Link className='nav__link' to='/'>
                                Home
                            </Link>
                            <Link className='nav__link' to='users'>
                                Users
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: {xs: 'block', sm: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </header>)
}

export default Header