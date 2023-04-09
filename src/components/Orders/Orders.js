import React, {useState, useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import "./Orders.css";
import { useSelector } from 'react-redux';
import {ordersApi} from "../../api/ordersApi";
import OrderItem from './OrderItem';
import "./Orders.css"

function Orders() {
  const [orders, setOrders] = useState([]);
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    fetchOrders();
  }, [userState.user]);

  async function fetchOrders() {
    const retrievedOrders = await ordersApi.getMyOrders();
    setOrders(retrievedOrders);
  }

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>
        <h1>Orders</h1>
        {userState.user?.role !== "CUSTOMER" ?
          <p>Not logged as a customer. Please log in.</p> :
          <div className="orders">
            {orders.map((order) => (
              <OrderItem key={order._id} order={order}/>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Orders;