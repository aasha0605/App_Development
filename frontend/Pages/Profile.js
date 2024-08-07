// src/Pages/Profile.js
import React from 'react';
import './Profile.css'; // Assuming you want to add some custom styles

const Profile = () => {
  // Hardcoded user data
  const user = {
    photoUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    name: 'Aasha',
    email: 'aasha@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.photoUrl} alt={`${user.name}'s profile`} className="profile-photo" />
        <h1>{user.name}</h1>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
