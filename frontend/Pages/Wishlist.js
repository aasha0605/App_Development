import React from 'react';
import { useWishlist } from '../Contexts/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();

  const handleRemoveFromWishlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove from Wishlist</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
