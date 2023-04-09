import React from 'react'
import "./OrderItem.css"
import CartItem from "../Cart/CartItem";

function OrderItem({order}) {
  const utcDate = `${order.createdAt}`;
  const localDate = new Date(utcDate);
  return (
    <div className='orderItem'>
      <p className='total'>Total: {order.totalPrice}</p>
      <p>Items:</p>
      {order.items.map((i) => (
        <CartItem item={i} hideButtons={true}/>
      ))}
      <p className={`status ${order.status}`}>status: {order.status}</p>
      <p>Date: {localDate.toString()}</p>
    </div>
  )
}

export default OrderItem
