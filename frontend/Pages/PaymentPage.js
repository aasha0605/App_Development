import React, { useState } from 'react';
import { useCart } from '../Contexts/CartContext';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';


const PaymentPage = () => {
  const { dispatch } = useCart();  // Removed cart from destructuring assignment
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    setIsPaid(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {isPaid ? (
        <div>
          <h2>Payment Successful</h2>
          <QRCode value="Payment successful! Thank you for your purchase." />
          <button onClick={() => navigate('/profile')}>Go to Profile</button>
        </div>
      ) : (
        <form onSubmit={handlePayment}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentDetails.cvv}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name on Card"
            value={paymentDetails.nameOnCard}
            onChange={handleChange}
            required
          />
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
