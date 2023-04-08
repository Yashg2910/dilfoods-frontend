import React, {useState, useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import {menuItemsApi} from "../../api/menuItemsApi";
import MenuItem from '../MenuItem/MenuItem';
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux'
import Button from '../Button/Button';

function Home() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchItems() {
      const response = await menuItemsApi.getItems();
      dispatch(setItems(response));
    }
    fetchItems();
  }, []);

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
        </div>
      </div>
    </div>
  )
}

export default Home;