import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import imagenes from './imagenes';
import { Badge, makeStyles } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';



export default function Navbar() {

  return (

    <Box sx={{ flexGrow: 1 }} marginBottom="10rem">
      <AppBar position="fixed" style={{background: "whitesmoke", boxShadow:"none"}}> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={imagenes.logo} height="80rem"/>
          </IconButton>
          <div sx={{ flexGrow: 1 }}/>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1}} color="textPrimary">
            En proceso...
          </Typography>
          <Button color="inherit" variant='outlined' style={{color:"black"}}>
              <strong>
                Sign In
              </strong>
            </Button>
            <IconButton aria-label='show cart items' color="inherit">
                <Badge badgeContent={1} color="secondary">
                    <ShoppingCart fontSize='large' color='primary'/>
                </Badge>
            </IconButton>
            
        </Toolbar>
      </AppBar>
    </Box>

  );
}
