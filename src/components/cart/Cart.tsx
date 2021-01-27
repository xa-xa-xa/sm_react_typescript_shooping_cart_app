import Divider from '@material-ui/core/Divider';
import React from 'react';
import { CartItemType } from '../../types';
import CartItem from '../cartItem/CartItem';
import { Wrapper } from './Cart.styles';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  setCartIsOpen: (isOpen: boolean) => void;
};

function Cart({ cartItems, addToCart, removeFromCart, setCartIsOpen }: Props) {
  const getTotal = (items: CartItemType[]) => {
    return items.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  //
  return (
    <Wrapper>
      <CloseIcon className="closeIcon" onClick={()=>setCartIsOpen(false)} />
      <h2>Shopping Cart</h2>
      {!cartItems.length ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, idx) => {
          return (
            <>
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
              {idx !== cartItems.length - 1 && (
                <Divider
                  light={true}
                  orientation='horizontal'
                  variant='middle'
                />
              )}
            </>
          );
        })
      )}
      <Divider orientation='horizontal' />
      <h2>Total: $ {getTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}

export default Cart;
