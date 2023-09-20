import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/Reducers/RootReducer'

const ProductItem = ({ id, cover, name, price }) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addToCart({ id, name, price, cover }))
    }
  return (
      <div key={id} className='product-box hover:shadow-lg transition duration-150 ease-in-out'>
          <img src={cover} alt="product" />
          <div className='product-text'>
              <div>
                  <span>{name}</span>
                  <span>{price}$</span>
              </div>
              <button className="Btn" onClick={() => addToCart()}>Add To Cart</button>
          </div>
      </div>
  )
}

export default ProductItem