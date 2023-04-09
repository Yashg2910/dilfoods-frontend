import React, {useState, useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import {menuItemsApi} from "../../api/menuItemsApi";
import MenuItem from '../MenuItem/MenuItem';
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'
import Button from '../Button/Button';
import { toast } from 'react-toastify';

function Home() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    let response;
    try {
      response = await menuItemsApi.getItems();
    } catch (e) {
      toast.error('Failed to fetch menu items. Server down.');
    }
    if (response) {
      dispatch(setItems([...response]));
    }
  }

  function onAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>

        <h1>Menu Items</h1>
        {/* MENU ITEMS */}
        <div className="menu-items">
          {items.map(item => (
            <MenuItem key={item._id} item={item}>
              <Button text="Add to cart" onClick={() => onAddItem(item)}/>
            </MenuItem>
          ))}
          {items.length === 0 && <p>No items in the menu yet.</p>}
        </div>
      </div>
    </div>
  )
}

export default Home;