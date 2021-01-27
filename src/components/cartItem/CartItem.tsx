import { CartItemType } from '../../types';
import { Wrapper } from './CartItem.styles';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

//
function CartItem({ item, addToCart, removeFromCart }: Props) {
  return (
    <Wrapper>
      <div className='container'>
        <h3>{item.title}</h3>
        <div className='info-container'>
          <section className='info'>
            <div className='information'>
              <p>Price: ${item.price}</p>
              <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
              <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(item.id)}
              >
                <Remove />
              </Button>
              <p>{item.amount}</p>
              <Button
                size='small'
                disableElevation
                variant='contained'
                onClick={() => addToCart(item)}
              >
                <Add />
              </Button>
            </div>
          </section>
          <section className='image'>
            <img src={item.image} alt={item.title} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default CartItem;
