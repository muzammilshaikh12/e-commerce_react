import React from 'react'

import CartIcon  from '../Cart/CartIcon'

import './CartBtn.css'


const CartButton = props => {
    return <button className='button' onClick={props.cartFunc}> 
        <span className='icon'><CartIcon /></span>
        <span>Your Cart</span>
        <span className='badge'>0</span>
    </button>
}

export default CartButton