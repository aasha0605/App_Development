import React, { useState } from 'react';
import { useSwapping } from '../Contexts/Swappingcontext';

const AddDress = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useSwapping();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDress = { id: Date.now(), name, description };
    dispatch({ type: 'ADD_DRESS', payload: newDress });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add a Dress</h2>
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
        <button type="submit">Add Dress</button>
      </form>
    </div>
  );
};

export default AddDress;
