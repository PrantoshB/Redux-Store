import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector(state => state.cartitems)

  return (
    <div className='navbar'>
        <h1>Redux Store</h1>
        <div className='nav-container'>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/cart'><span><i className="fa-solid fa-cart-shopping"/> {items.length}</span></Link>

        </div>
    </div>
  )
}

export default Navbar