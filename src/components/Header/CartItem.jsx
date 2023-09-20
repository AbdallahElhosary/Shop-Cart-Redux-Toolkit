import "./CartItem.scss";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/Reducers/RootReducer';



const CartItem = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch()

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  }
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <div key={id} className='cart-item '>
      <button>
        <img src={cover} alt="Item" />
      </button>
      <div className='cart-item-text'>
        <h6>{name}</h6>
        <span>Unit Price ${price}</span>
        <div className='manage-price'>
          <div className='quantity'>
            <button onClick={incCartitems}>+</button>
            <span>{quantity}</span>
            <button onClick={descCartitems}>-</button>
          </div>
          <span>${parseFloat((quantity * price).toFixed(2)) }</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;