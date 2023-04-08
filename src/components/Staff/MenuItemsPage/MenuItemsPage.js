import React, {useState, useEffect} from 'react'
import Navbar from '../../Navbar/Navbar';
import "./MenuItemsPage.css";

function MenuItemsPage() {

  useEffect(() => {
  }, []);

  return (
    <div className='page'>
      <Navbar forStaff={true}/>
      <div className='page-content'>

      </div>
    </div>
  )
}

export default MenuItemsPage;