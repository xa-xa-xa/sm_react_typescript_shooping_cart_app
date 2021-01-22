import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { Wrapper, StyledButton } from './App.styles';
import { CartItemType } from './types';
import Item from './components/item/Item';
import Cart from './components/cart/Cart';

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((cartItems) : any => {
      const alreadyInCart = cartItems.find(i => i.id === clickedItem.id)
      if (alreadyInCart) {
        return cartItems.map(item => item.id === clickedItem.id ? { ...Item, amount: item.amount + 1 } : item)
      }
      return [...cartItems, {...clickedItem, amount: 1}]
    })
  };

  const handleRemoveFromCart = () => null; 

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Cant load products n ow...</div>;

  return (
    <Wrapper className='App'>
      <Drawer
        anchor='right'
        open={cartIsOpen}
        onClose={() => setCartIsOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton name='cart' onClick={() => setCartIsOpen(!cartIsOpen)}>
        <AddShoppingCart fontSize='large' />
        <Badge badgeContent={getTotalItems(cartItems)} color='error'></Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
