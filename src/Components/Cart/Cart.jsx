import React, {useContext} from 'react'
import "./Cart.css";
import CartItems from "./CartItems.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {clearCart, total} from "../../features/features.js";
import {ThemeContext} from "../../Api/Context"
import {RiShoppingCartFill} from "react-icons/ri"


const Cart = () => {
  const {totalAmount}=useContext(ThemeContext)
  const cart = useSelector((state) => state.commerce.cart);
  const {theSetter, theme} = useContext(ThemeContext)
  const dispatch = useDispatch()
  const payment=()=>{
    const refVal = "my-ref" + Math.random () * 1000;
    
      window.Korapay.initialize({
          key:"pk_test_X3AXhz3wRAETd6TrgfBXdcVwpVwJMq8XifBAakPe",
          reference: `${refVal}`,
          amount: totalAmount, 
          currency: "NGN",
          customer: {
            name: "John Doe",
            email: "john@doe.com"
          },
          notification_url: "https://example.com/webhook"
      });

  

  }


  return (
    <div className="Cart-Holder" style={theSetter}>
      <div className="Cart-Box">
      <div className="Cart-Title">
        <div className='carty'>
      <RiShoppingCartFill/>
        <h4> Cart</h4>
        </div>
        <h3>Total:  ${totalAmount}</h3>
        <p onClick={()=> {dispatch(clearCart())}}>Remove all</p>
      </div>
      <div className="Cart-Items">
      {
        cart?.map((items)=>(
          <CartItems key={items.id} image={items.image} title={items.title} price={items.price} item={items} QTY={items.QTY} />
        ))
      } 
      </div>
      <div className="Cart-Check">
      <button onClick={payment} >Check Out</button>
      </div>
      </div>
    </div>
  )
}

export default Cart