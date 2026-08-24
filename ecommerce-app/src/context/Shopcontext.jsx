import React, { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Products
  const productData = products;

  // Cart State
  const [cartItems, setCartItems] = useState({});

  // Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };

      if (updatedCart[itemId] > 1) {
        updatedCart[itemId]--;
      } else {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });
  };

  // Cart Count
  const getCartCount = () => {
    let total = 0;

    for (let id in cartItems) {
      total += cartItems[id];
    }

    return total;
  };

  // Grand Total
  const getCartAmount = () => {
    let total = 0;

    productData.forEach((item) => {
      if (cartItems[item.id]) {
        total += item.price * cartItems[item.id];
      }
    });

    return total;
  };

  const value = {
    productData,
    cartItems,
    addToCart,
    removeFromCart,
    getCartCount,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;