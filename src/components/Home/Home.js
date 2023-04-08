import React, {useState, useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import {menuItemsApi} from "../../api/menuItemsApi";
import MenuItem from '../MenuItem/MenuItem';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const items = await menuItemsApi.getItems();
      setItems(items);
    }
    fetchItems();
  }, []);

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>

        <h1>Menu Items</h1>
        {/* MENU ITEMS */}
        <div className="menu-items">
          {items.map(item => (
            <MenuItem key={item._id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;