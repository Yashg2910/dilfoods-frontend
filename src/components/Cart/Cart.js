import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import CartItem from './CartItem';
import { addItem, removeItem, clearCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Button from "../Button/Button"
import { ordersApi } from '../../api/ordersApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {usersApi} from "../../api/usersApi";
import { userSession } from '../../api/userSession';
import { login } from '../../redux/userSlice';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState();
  const [otpState, setOtpState] = useState("unsent");

  const totalPrice = cart.items.reduce(((acc, item) => acc + (item.price * item.quantity)), 0);

  function onAddItem(item) {
    dispatch(addItem(item))
  }

  function onRemoveItem(item) {
    dispatch(removeItem(item))
  }

  async function placeOrder() {
    const userId = userState.user?._id;
    try {
      const res = await ordersApi.createOrder(userId, cart.items, totalPrice);
      dispatch(clearCart());
      navigate("/orders");
    } catch (e) {
      console.log("Error placing order", e);
      toast.error("Error placing order");
    }
  }

  async function sendOTP() {
    try {
      await usersApi.sendOtp(phone);
      toast.info("OTP sent successfully")
      setOtpState("sent");
    } catch (e) {
      toast.info("Error sending OTP");
    }
  }

  async function verifyOtp() {
    try {
      const response = await usersApi.verifyOtp(phone, Number(otp));
      toast.info("OTP verified successfully");
      setOtpState("verified");
      dispatch(login(response));
      userSession.setUserToken(response.token);
      userSession.setUser(response.user);
    } catch (e) {
      toast.info("Error sending OTP");
    }
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
        {cart.items.length > 0 &&
          <>
            {otpState !== "verified" && <input type="text" name="phone" placeholder="Phone number" value={userState.user?.phone || phone} onChange={(e) => setPhone(e.target.value)} disabled={otpState === "sent"}/>}
            {otpState === "unsent" && <Button text="Request OTP" onClick={sendOTP}/>}
            {otpState === "sent" && 
              <>
                <input type="text" name="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <Button text="Verify OTP" onClick={verifyOtp}/>
              </>
            }
          </>
        }
        <Button text={"Place Order"} disabled={cart.items.length === 0 || otpState !== "verified"} onClick={placeOrder}/>
      </div>
    </div>
  )
}

export default Cart;