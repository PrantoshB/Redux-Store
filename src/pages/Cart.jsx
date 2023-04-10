import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {remove} from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cartitems)
  const handleRemove = (productId)=>{
    dispatch(remove(productId))
  }

  return (
    <div className='cart-list'>
      {
        products.map(item=> (
          <div className="single-cart-item" key={item.id}>
            <img className='cart-image' src={item.image} alt="" />
            <p className='cart-item-title'>{item.title}</p>
            <p>{item.price}</p>
            <button className='cart-btn' onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        ))
      }      
    </div>
  )
}

export default Cart