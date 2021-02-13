import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StyledButton } from '../../App.styles';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { CartItemType } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    cartButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
      styledButton: {
          position: 'relative',
          marginTop:"-.5rem"
    },
      badge: {
          position: "absolute",
          top: 12,
          right: 6,
    },
  })
);

export default function Navbar(props: {
  cartItems: any;
  setCartIsOpen: any;
  cartIsOpen: any;
}) {
  const { cartItems, setCartIsOpen, cartIsOpen } = props;
  const classes = useStyles();

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Shopping Cart
        </Typography>
              <StyledButton name='cart'
                  className={classes.styledButton}
                  onClick={() => setCartIsOpen(!cartIsOpen)} >
          <AddShoppingCart fontSize='inherit' style={{color: "white"}} />
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color='error'
            className={classes.badge}
          />
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
}
