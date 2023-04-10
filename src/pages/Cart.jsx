import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products = useSelector(state => state.cartproducts)
  return (
    <div className='cart-list'>
      {
        products.map(item=> (
          <div className="single-cart-item" key={item.id}>
            <img className='cart-image' src={item.image} alt="" />
            <p className='cart-item-title'>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))
      }      
    </div>
  )
}

export default Cart