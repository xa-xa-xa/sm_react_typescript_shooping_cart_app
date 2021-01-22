import React from 'react'
import { CartItemType } from '../../types'
import CartItem from '../cartItem/CartItem'
import { Wrapper } from './Cart.styles'


type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


function Cart({cartItems, addToCart, removeFromCart}: Props) {
    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {!cartItems.length ? <p>Cart is empty</p> :
                cartItems.map(item => {
                    return <CartItem key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                })}
        </Wrapper>
    )
}

export default Cart
