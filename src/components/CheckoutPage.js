import React from "react";
import Grid from "@material-ui/core/Grid"
import products from '../product_data'
import  {makeStyles} from '@material-ui/core/styles'
import {Typography } from "@mui/material";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider'; 

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow: 1,
        padding: "2rem",
    }
}))

const CheckoutPage = () =>{
    const[{basket}, dispatch] = useStateValue();
    const classes = useStyles();

    function FormRow(){
        return(
            <React.Fragment>
                {basket?.map((item) =>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
                ))}

            </React.Fragment>
        )

    }

    return(
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs ={12}>
                <Typography align='center' gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container spacing={3}>
                <FormRow/>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Typography align="center" gutterBottom variant="h4">
                    <Total/>
                </Typography>
            </Grid>

        </Grid>
    </div>

    );

}

export default CheckoutPage
