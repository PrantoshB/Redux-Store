import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'

const Products = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data)
    };
    fetchProducts();
  }, []);

const handleProduct = (product) =>{
  dispatch(add(product))
}

  return (
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