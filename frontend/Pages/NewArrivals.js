import React from 'react';
import './NewArrivals.css';
import { useCart } from '../Contexts/CartContext';
import { useWishlist } from '../Contexts/WishlistContext';

const newArrivalsData = [
  {
    id: 1,
    image: require('../Assets/Images/dress1.jpg'),
    name: 'Elegant Evening Dress',
    description: 'A beautiful evening dress perfect for any special occasion.',
    price: 99.99,
  },
  {
    id: 2,
    image: require('../Assets/Images/dress2.jpg'),
    name: 'Casual Summer Dress',
    description: 'Light and airy, ideal for those warm summer days.',
    price: 49.99,
  },
  {
    id: 3,
    image: require('../Assets/Images/dress3.jpg'),
    name: 'Professional Office Dress',
    description: 'Look sharp and professional with this stylish office dress.',
    price: 79.99,
  },
  {
    id: 4,
    image: require('../Assets/Images/dress4.jpg'),
    name: 'Chic Cocktail Dress',
    description: 'Stand out at any party with this chic cocktail dress.',
    price: 89.99,
  },
  {
    id: 5,
    image: require('../Assets/Images/dress5.jpg'),
    name: 'Floral Spring Dress',
    description: 'Brighten up your spring wardrobe with this floral dress.',
    price: 59.99,
  },
  {
    id: 6,
    image: require('../Assets/Images/dress6.jpg'),
    name: 'Bohemian Maxi Dress',
    description: 'A bohemian style dress perfect for a relaxed look.',
    price: 169.99,
  },
  {
    id: 7,
    image: require('../Assets/Images/dress7.jpg'),
    name: 'Summer Beach Dress',
    description: 'Ideal for a day out at the beach, comfortable and stylish.',
    price: 39.99,
  },
  {
    id: 8,
    image: require('../Assets/Images/dress8.jpg'),
    name: 'Vintage Polka Dot Dress',
    description: 'A vintage look with modern comfort, perfect for any occasion.',
    price: 54.99,
  },
  {
    id: 9,
    image: require('../Assets/Images/dress9.jpg'),
    name: 'Glamorous Party Dress',
    description: 'Shine bright at any party with this glamorous dress.',
    price: 119.99,
  },
  {
    id: 10,
    image: require('../Assets/Images/dress10.jpg'),
    name: 'Classic Black Dress',
    description: 'A timeless piece that every wardrobe needs.',
    price: 69.99,
  },
  {
    id: 11,
    image: require('../Assets/Images/dress11.jpg'),
    name: 'Modern Denim Dress',
    description: 'A casual and modern take on the classic denim dress.',
    price: 59.99,
  },
  {
    id: 12,
    image: require('../Assets/Images/dress12.jpg'),
    name: 'Elegant Lace Dress',
    description: 'Elegant and intricate lace dress for special occasions.',
    price: 99.99,
  },
  {
    id: 13,
    image: require('../Assets/Images/dress13.jpg'),
    name: 'Classic Summer Dress',
    description: 'Perfect for a sunny day out.',
    price: 49.99,
  },
  {
    id: 14,
    image: require('../Assets/Images/dress14.jpg'),
    name: 'Party Ready Dress',
    description: 'Sparkle and shine at any event.',
    price: 89.99,
  },
  {
    id: 15,
    image: require('../Assets/Images/dress15.jpg'),
    name: 'Winter Warm Dress',
    description: 'Stay stylish and warm during the colder months.',
    price: 79.99,
  },
  {
    id: 16,
    image: require('../Assets/Images/dress16.jpg'),
    name: 'Elegant Gown',
    description: 'Perfect for gala events and formal gatherings.',
    price: 149.99,
  },
  {
    id: 17,
    image: require('../Assets/Images/dress17.jpg'),
    name: 'Casual Day Dress',
    description: 'Comfortable and chic, ideal for everyday wear.',
    price: 39.99,
  },
  {
    id: 18,
    image: require('../Assets/Images/dress18.jpg'),
    name: 'Evening Gown',
    description: 'A stunning gown for evening occasions.',
    price: 129.99,
  },
  {
    id: 19,
    image: require('../Assets/Images/dress19.jpg'),
    name: 'Summer Floral Dress',
    description: 'Light and floral, perfect for summer days.',
    price: 49.99,
  },
  {
    id: 20,
    image: require('../Assets/Images/dress20.jpg'),
    name: 'Cocktail Dress',
    description: 'Elegant and chic, ideal for cocktail parties.',
    price: 89.99,
  },
  {
    id: 21,
    image: require('../Assets/Images/dress21.jpg'),
    name: 'Formal Dress',
    description: 'Perfect for business meetings and formal events.',
    price: 79.99,
  },
  {
    id: 22,
    image: require('../Assets/Images/dress22.jpg'),
    name: 'Beach Dress',
    description: 'Ideal for a casual day at the beach.',
    price: 39.99,
  },
  {
    id: 23,
    image: require('../Assets/Images/dress23.jpg'),
    name: 'Spring Dress',
    description: 'Perfect for a spring day out.',
    price: 49.99,
  },
  {
    id: 24,
    image: require('../Assets/Images/dress24.jpg'),
    name: 'Polka Dot Dress',
    description: 'A fun and retro polka dot dress.',
    price: 54.99,
  },
  {
    id: 25,
    image: require('../Assets/Images/dress25.jpg'),
    name: 'Lace Dress',
    description: 'Elegant lace dress for special occasions.',
    price: 99.99,
  },
  {
    id: 26,
    image: require('../Assets/Images/dress26.jpg'),
    name: 'Winter Dress',
    description: 'Stylish and warm for winter months.',
    price: 79.99,
  },
  {
    id: 27,
    image: require('../Assets/Images/dress27.jpg'),
    name: 'Party Dress',
    description: 'Sparkling dress perfect for parties.',
    price: 89.99,
  },
  {
    id: 28,
    image: require('../Assets/Images/dress28.jpg'),
    name: 'Maxi Dress',
    description: 'Comfortable maxi dress for casual wear.',
    price: 59.99,
  },
  {
    id: 29,
    image: require('../Assets/Images/dress29.jpg'),
    name: 'Vintage Dress',
    description: 'A timeless vintage style dress.',
    price: 69.99,
  },
  {
    id: 30,
    image: require('../Assets/Images/dress30.jpg'),
    name: 'Evening Dress',
    description: 'Elegant dress for evening occasions.',
    price: 119.99,
  },
  {
    id: 31,
    image: require('../Assets/Images/dress31.jpg'),
    name: 'Summer Dress',
    description: 'Light and comfortable summer dress.',
    price: 49.99,
  },
  {
    id: 32,
    image: require('../Assets/Images/dress32.jpg'),
    name: 'Office Dress',
    description: 'Professional dress for office wear.',
    price: 59.99,
  },
  {
    id: 33,
    image: require('../Assets/Images/dress33.jpg'),
    name: 'Casual Dress',
    description: 'Comfortable casual dress for everyday wear.',
    price: 39.99,
  },
  {
    id: 34,
    image: require('../Assets/Images/dress34.jpg'),
    name: 'Spring Dress',
    description: 'Bright and cheerful spring dress.',
    price: 49.99,
  },
  {
    id: 35,
    image: require('../Assets/Images/dress35.jpg'),
    name: 'Cocktail Dress',
    description: 'Chic and stylish cocktail dress.',
    price: 89.99,
  },
  {
    id: 36,
    image: require('../Assets/Images/dress36.jpg'),
    name: 'Gala Dress',
    description: 'Elegant dress perfect for gala events.',
    price: 149.99,
  },
  {
    id: 37,
    image: require('../Assets/Images/dress37.jpg'),
    name: 'Beach Dress',
    description: 'Light dress perfect for the beach.',
    price: 39.99,
  },
  {
    id: 38,
    image: require('../Assets/Images/dress38.jpg'),
    name: 'Lace Dress',
    description: 'Intricate lace dress for formal occasions.',
    price: 99.99,
  },
  {
    id: 39,
    image: require('../Assets/Images/dress39.jpg'),
    name: 'Summer Dress',
    description: 'Perfect for a sunny summer day.',
    price: 49.99,
  },
  {
    id: 40,
    image: require('../Assets/Images/dress40.jpg'),
    name: 'Office Dress',
    description: 'Sharp and professional office dress.',
    price: 59.99,
  },
  {
    id: 41,
    image: require('../Assets/Images/dress41.jpg'),
    name: 'Party Dress',
    description: 'Stylish dress for parties.',
    price: 89.99,
  },
  {
    id: 42,
    image: require('../Assets/Images/dress42.jpg'),
    name: 'Formal Dress',
    description: 'Elegant dress for formal events.',
    price: 79.99,
  },
  {
    id: 43,
    image: require('../Assets/Images/dress43.jpg'),
    name: 'Spring Dress',
    description: 'Bright and floral dress for spring.',
    price: 49.99,
  },
  {
    id: 44,
    image: require('../Assets/Images/dress44.jpg'),
    name: 'Cocktail Dress',
    description: 'Perfect dress for cocktail parties.',
    price: 89.99,
  },
  {
    id: 45,
    image: require('../Assets/Images/dress45.jpg'),
    name: 'Glamorous Dress',
    description: 'Shine at any event with this glamorous dress.',
    price: 119.99,
  },
];

const NewArrivals = () => {
  const { dispatch: cartDispatch } = useCart(); 
  const { dispatch: wishlistDispatch } = useWishlist();

  const handleAddToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleAddToWishlist = (item) => {
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  };

  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <div className="arrivals-container">
        {newArrivalsData.map((item) => (
          <div key={item.id} className="arrival-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            <button onClick={() => handleAddToWishlist(item)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;