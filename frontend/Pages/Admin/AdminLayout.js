// src/Components/Admin/AdminLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
