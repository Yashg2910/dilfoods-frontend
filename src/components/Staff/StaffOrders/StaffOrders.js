import React, {useState, useEffect} from 'react'
import Navbar from "../../Navbar/Navbar";
import "../../Orders/Orders.css";
import { useSelector } from 'react-redux';
import {ordersApi} from "../../../api/ordersApi";
import OrderItem from '../../Orders/OrderItem';
import { useNavigate } from 'react-router-dom';

function StaffOrders() {
  const [orders, setOrders] = useState([]);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, [userState.user]);

  async function fetchOrders() {
    if (userState.user?.role !== "STAFF") navigate("/");
    const retrievedOrders = await ordersApi.getOrders();
    setOrders(retrievedOrders);
  }

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>
        <h1>All Orders</h1>
        {userState.user?.role !== "STAFF" ?
          <p>Not logged as a STAFF. Please log in.</p> :
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

export default StaffOrders;