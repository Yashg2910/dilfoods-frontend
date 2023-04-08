import React, {useState, useEffect, useRef} from 'react';
import Navbar from "../../Navbar/Navbar";
import "./MenuItemsPage.css";
import MenuItem from "../../MenuItem/MenuItem";
import { useDispatch, useSelector } from 'react-redux';
import { menuItemsApi } from '../../../api/menuItemsApi';
import { setItems } from '../../../redux/menuSlice';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

function MenuItemsPage() {
  const items = useSelector((state) => state.menu.items);
  const userState = useSelector((state) => state.user);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({ name: '', price: '', description: '', category: '', imageUrl: '' });
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.user?.role !== "STAFF") navigate("/");
    refreshItemSet();
  }, []);

  async function refreshItemSet() {
    try {
      const res = await menuItemsApi.getItems();
      dispatch(setItems(res));
    } catch (e) {
      console.log(e);
    }
  }


  // Edit Item Methods
  function onEditItem(item) {
    setEditedItem(item);
    setShowEditForm(true);
  }

  const handleEditItem = async (event) => {
    event.preventDefault();
    setShowEditForm(false);
    try {
      await menuItemsApi.updateItem(editedItem);
      refreshItemSet();
    } catch (e) {
      console.log("Error updating Item", e);
    }
  };

  const handleEditedItemChange = event => {
    setEditedItem({ ...editedItem, [event.target.name]: event.target.value });
  };

  // Add Item Methods
  function onAddItem() {
    setEditedItem({ name: '', price: '', description: '', category: '', imageUrl: '' });
    setShowAddForm(true);
  }

  const handleAddItem = async (event) => {
    event.preventDefault();
    setShowAddForm(false);
    try {
      const formData = new FormData();
      formData.append('name', editedItem.name);
      formData.append('price', editedItem.price);
      formData.append('description', editedItem.description);
      formData.append('category', editedItem.category);
      formData.append('image', fileInputRef.current.files[0]);
      await menuItemsApi.createItem(formData);
      refreshItemSet();
    } catch (e) {
      console.log("Error Adding Item", e);
    }
  };

  const handleNewItemChange = event => {
    setEditedItem({ ...editedItem, [event.target.name]: event.target.value });
  };
  
  // Remove Item Methods
  async function onRemoveItem(item) {
    try {
      await menuItemsApi.deleteItem(item);
      refreshItemSet();
    } catch (e) {
      console.log("Error deleting an item", e);
    }
  }

  return (
    <div className='page'>
      <Navbar forStaff={true}/>
      <div className='page-content'>
        <h1>Menu Items</h1>
        <Button onClick={onAddItem}>Add Item</Button>
        {/* MENU ITEMS */}
        {showEditForm && (
          <form onSubmit={handleEditItem}>
            <input type="text" name="name" placeholder="Name" value={editedItem.name} onChange={handleEditedItemChange} required />
            <input type="number" name="price" placeholder="Price" value={editedItem.price} onChange={handleEditedItemChange} required />
            <input type="text" name="description" placeholder="Description" value={editedItem.description} onChange={handleEditedItemChange} />
            <input type="text" name="category" placeholder="Category" value={editedItem.category} onChange={handleEditedItemChange} />
            <input type="text" name="imageUrl" placeholder="Image URI" value={editedItem.imageUrl} onChange={handleEditedItemChange} />
            <button type="submit">Save</button>
          </form>
        )}
        {showAddForm && (
          <form onSubmit={handleAddItem}>
            <input type="text" name="name" placeholder="Name" value={editedItem.name} onChange={handleNewItemChange} required />
            <input type="number" name="price" placeholder="Price" value={editedItem.price} onChange={handleNewItemChange} required />
            <input type="text" name="description" placeholder="Description" value={editedItem.description} onChange={handleNewItemChange} />
            <input type="text" name="category" placeholder="Category" value={editedItem.category} onChange={handleNewItemChange} />
            <input type="file" name="image" accept="image/*" ref={fileInputRef} />
            <button type="submit">Add</button>
          </form>
        )}
        <div className="menu-items">
          {items.map(item => (
            <MenuItem key={item._id} item={item}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Button className="menu-item-button-edit" onClick={() => onEditItem(item)}>Edit</Button>
                <Button className="menu-item-button-remove" onClick={() => onRemoveItem(item)}>Remove</Button>
              </div>
            </MenuItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuItemsPage;