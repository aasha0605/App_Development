// src/Pages/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { state: { cart }, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
      <div className="checkout-section">
        <Link to="/checkout">
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
