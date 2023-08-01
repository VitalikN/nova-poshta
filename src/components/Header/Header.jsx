import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const Header =()=>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };

    return <>
      <AppBar position="static"
    sx={{  backgroundColor:"rgb(211, 47, 47)", width:"100%", 
    height:"70px" , 
}}  
    >
      <Container  sx={{display:'flex',  alignItems: 'center' }}>
  <Box   component={Link}
  to="/"
  sx={{
    display: 'flex',
    flexGrow: 1,
    textDecoration: 'none',
    pt:"20px",pb:"20px"
  }}
>
      <img src="poshta.jpeg" alt="poshta" width='30px' height='30px' />
        </Box>
        <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex', gap: 10 },
                }}>
      <Button
     variant="outlined"  
      component={Link}
     to='/'
         sx={{
     my: 2,
     color: 'white',
      borderColor: 'white',
      "&:hover":{
        borderColor: "rgb(211, 47, 47)",
      }
    }}>Пошук за  TTH</Button>

     <Button
     variant="outlined"  
      component={Link}
      to="/departments"
         sx={{
         my: 2,
          color: 'white',
        borderColor: 'white',
        "&:hover":{
            borderColor: "rgb(211, 47, 47)",
          }
      }} >Пошук відділень</Button>
                  </Box>
                  <IconButton
                sx={{ display: { md: 'none' } }}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon sx={{fontSize:"40px"}}/>
              </IconButton>
    </Container>
     </AppBar>
     <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem   component={Link}  to='/' onClick={handleMenuClose}>Пошук за  TTH</MenuItem>
        <MenuItem    component={Link} to="/departments" onClick={handleMenuClose}>Пошук відділень</MenuItem>
      </Menu>
     
    </>
}

export default Header;