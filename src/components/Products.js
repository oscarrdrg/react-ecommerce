import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../product_data'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {

  return (
    <Box sx={{ flexGrow: 1 }} padding={3}>
      <Grid container spacing={2} >
          {
             products.map(product =>(
                <Grid item xs={12} md={4} sm={6} lg={3}>
                    <Product key={product.id} product={product}/>
                 </Grid>

             )) 
          }
       </Grid>
    </Box>
  );
}
