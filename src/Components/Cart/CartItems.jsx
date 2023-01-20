import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, minusItem, removeItem, total } from '../../Features/Features'
import './Cart.css'


const CartItems = (props) => {
  const [change, setChange] = useState(false)
  useEffect(()=>{
    dispatch(total())
  }, [change])
  const dispatch = useDispatch()
  return (
    <div className='cart-items'>
        <img className='cart-item-img' src={props.image}/>
        <h5>{props.title}</h5>
        <div className='cart-cal' >
            <button className='addButt' onClick={()=> {dispatch(addToCart(props.item)); setChange(!change)}} >+</button>
            <p>{props.QTY}</p>
            <button className='addButt' onClick={()=> {dispatch(minusItem(props.item)); setChange(!change)}}>-</button>
        </div> 
        <h3>${props.price * props.QTY}</h3>
        <p className='removeOne' onClick={()=>{ dispatch(removeItem(props.item)); setChange(!change)}}>Remove</p>
    </div>
  )
}

export default CartItems;