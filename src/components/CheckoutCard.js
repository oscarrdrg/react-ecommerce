import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import imagenes from './imagenes';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete'
import  {makeStyles} from '@material-ui/core/styles'
import { useStateValue } from '../StateProvider'; 
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) =>({

    cardActions: {

        display:"flex",
        justifyContent:"space-between",
        textAlign:"center"
    },

    cardRating:{
        display:"flex"
    }

}))


export default function CheckoutCard({product : {id, name, productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    const[{basket}, dispatch] = useStateValue();

    const removeItem = () =>{
      dispatch({
        type: actionTypes.REMOVE_ITEM,
        id:id,
      })
    }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={ClassNames.action}
            variant= "h5"
            color='textSecondary'
              
            >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
              <p>&#11088;</p>
          ))}
        </div>
        
        <IconButton><DeleteIcon fontSize='large' onClick={removeItem}/></IconButton>
        
      </CardActions>
    </Card>
  );
}
