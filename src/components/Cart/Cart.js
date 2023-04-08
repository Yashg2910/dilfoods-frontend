import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import CartItem from './CartItem';
import { addItem, removeItem, clearCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.items.reduce(((acc, item) => acc + (item.price * item.quantity)), 0);

  function onAddItem(item) {
    dispatch(addItem(item))
  }

  function onRemoveItem(item) {
    dispatch(removeItem(item))
  }

  function onClearCart() {

  }

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>
        <h2>Cart</h2>
        {cart.items.length > 0 ?
          <>
            <div className='cart-items'>
              {cart.items.map((item) => <CartItem key={item._id} item={item} onAddItem={() => onAddItem(item)} onRemoveItem={() => onRemoveItem(item)}/>)}
            </div>
            <h3>Total: {totalPrice}</h3>
          </> :
          <h3>No Items added yet</h3>
        }
      </div>
    </div>
  )
}

export default Cart;