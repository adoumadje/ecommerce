import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box }  from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/commerce.png';
import { styles } from './styles';




const Navbar = () => {
  return (
  <>
    <AppBar position="fixed" color="inherit" sx={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={styles.title}>
            <img src={logo} alt="commerce.js" height="25px" sx={styles.image} /> 
            Commerce.js
          </Typography>
          <Box sx={styles.grow} />
          <Box sx={styles.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
    </AppBar>
  </>
    );
};

export default Navbar;
