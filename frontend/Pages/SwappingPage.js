import React, { useState } from 'react';
import { useSwapping } from '../Contexts/Swappingcontext';
import './SwappingPage.css';

const SwappingPage = () => {
  const { dispatch } = useSwapping();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [quality, setQuality] = useState('Average');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('Please upload an image of the dress.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newDress = {
        id: Date.now(),
        name,
        description,
        image: reader.result,
        quality,
      };
      dispatch({ type: 'ADD_DRESS', payload: newDress });
      setName('');
      setDescription('');
      setImage(null);
      setQuality('Average');
      setSuccessMessage('Dress added successfully!'); // Set success message
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
    };
    reader.readAsDataURL(image);
  };

  return (
    <div>
      <h1>Dress Swapping Page</h1>
      <div className='swappingpage'>
        <h2>Add a Dress</h2>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>
          <div>
            <label>Quality</label>
            <select value={quality} onChange={(e) => setQuality(e.target.value)} required>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <button type="submit">Add Dress</button>
        </form>
      </div>
      {/* Removed the section displaying available dresses */}
    </div>
  );
};

export default SwappingPage;
