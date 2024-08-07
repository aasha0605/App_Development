import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li onClick={() => handleNavigation('/admin/view-orders')}>View Orders</li>
        <li onClick={() => handleNavigation('/admin/manage-orders')}>Manage Orders</li>
        <li onClick={() => handleNavigation('/admin/manage-products')}>Manage Products</li>
        <li onClick={() => handleNavigation('/admin/manage-users')}>Manage Users</li>
        <li onClick={() => handleNavigation('/admin/product-details')}>Product Details</li>
      </ul>
    </div>
  );
};

export default Sidebar;
