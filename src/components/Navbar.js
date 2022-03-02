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
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'; 


export default function Navbar() {

  const[{basket}, dispatch] = useStateValue();
  return (

    <Box sx={{ flexGrow: 1 }} marginBottom="10rem">
      <AppBar position="fixed" style={{background: "whitesmoke", boxShadow:"none"}}> 
        <Toolbar>
          <Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={imagenes.logo} height="80rem"/>
          </IconButton></Link>
          
          <div sx={{ flexGrow: 1 }}/>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1}} color="textPrimary">
            Hello Guest
          </Typography>
          <Button color="inherit" variant='outlined' style={{color:"black"}}>
              <strong>
                Sign In
              </strong>
            </Button>
            <Link to="checkout-page">
            <IconButton aria-label='show cart items' color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                    <ShoppingCart fontSize='large' color='primary'/>
                </Badge>
            </IconButton></Link>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
