import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState([]);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
    }
  };

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const editProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, products, addProduct, editProduct, deleteProduct }}>
      {children}
    </AdminContext.Provider>
  );
};
