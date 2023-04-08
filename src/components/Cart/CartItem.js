import React from 'react';
import "./CartItem.css";
import { config } from '../../config';

function CartItem({item, onAddItem, onRemoveItem}) {
  return (
    <div className='cart-item'>
      <img src={`${config.API_HOST}/uploads/${item.imageUrl}`} alt={item.name} className="cart-item-image" />
      <div className='cart-item-info'>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className='quantity-container'>
        <button className='quantity-btn' onClick={onRemoveItem}>-</button>
        <span>{item.quantity}</span>
        <button className='quantity-btn' onClick={onAddItem}>+</button>
      </div>
    </div>
  )
}

export default CartItem