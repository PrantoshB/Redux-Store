import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'
import { fetchProducts, Status } from '../store/productSlice';
import { useSelector } from 'react-redux';

const Products = () => {

  const dispatch = useDispatch();
  const {data: products, status} = useSelector(status => status.products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

const handleProduct = (product) =>{
  dispatch(add(product))
}

  return (

    status == Status.LOADING ? <p>LOADING...</p> :

    <div className="product-container">
      {
        products.map(product => (
          <div className='card' key={product.id}>
            <img className='product-image' src={product.image} alt="product-image" />
            <div>
            <p>{product.title.split(' ').slice(0,4).join(' ')}</p>
            <h4>$ {product.price}</h4>
            <button className='add-to-cart-btn' onClick={() => handleProduct(product)}>Add to cart</button>
            </div>
           
          </div>
        ))
      }
    </div>
  )
}

export default Products