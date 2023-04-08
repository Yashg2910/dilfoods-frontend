import React from 'react';
import "./MenuItem.css";
import { config } from '../../config';

const MenuItem = ({ item, children }) => {
  return (
    <div className="menu-item-card">
      <img src={`${config.API_HOST}/uploads/${item.imageUrl}`} alt={item.name} className="menu-item-image" />
      <h3 className="menu-item-name">{item.name}</h3>
      <p className="menu-item-description">{item.description}</p>
      <p className="menu-item-price">{item.price}</p>
      {children}
    </div>
  );
}

export default MenuItem;