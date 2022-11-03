import React,{useContext} from 'react'

import CartIcon  from '../Cart/CartIcon'

import './CartBtn.css'

import CartContext from '../store/CartContext'


const CartButton = props => {
    const Cartctx = useContext(CartContext)
    const numOfItems = Cartctx.items.reduce((curNumber,item)=>{
        return curNumber + Number(item.quantity)
    },0)
    return <button className='button' onClick={props.cartFunc}> 
        <span className='icon'><CartIcon /></span>
        <span>Your Cart</span>
        <span className='badge'>{numOfItems}</span>
    </button>
}

export default CartButton