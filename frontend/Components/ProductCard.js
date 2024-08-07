import React from 'react';
import { useWishlist } from '../Contexts/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { dispatch } = useWishlist();

  const handleAddToWishlist = () => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;
