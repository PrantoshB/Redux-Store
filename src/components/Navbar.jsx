import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector(state => state.cartitems)

  return (
    <div className='navbar'>
        <span>Redux Store</span>
        <div className='nav-container'>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
          <p>Item Count: {items.length}</p>
        </div>
    </div>
  )
}

export default Navbar