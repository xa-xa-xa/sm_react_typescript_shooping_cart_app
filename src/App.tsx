import { useState } from 'react';
import { useQuery } from 'react-query';

import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { Wrapper, StyledButton } from './App.styles';
import { CartItemType } from './types';
import Item from './components/item/Item';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );



  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((cartItems) => {
      const alreadyInCart = cartItems.find((i) => i.id === clickedItem.id);
      if (alreadyInCart) {
        return cartItems.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...cartItems, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        console.log(id);

        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
    console.log(cartItems);
  };

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
          setCartIsOpen={setCartIsOpen}
        />
      </Drawer>
      <Navbar cartItems={cartItems} setCartIsOpen={setCartIsOpen} cartIsOpen={cartIsOpen}  />

      <Grid container spacing={3} style={{position: "relative", marginTop: 48}}>
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
