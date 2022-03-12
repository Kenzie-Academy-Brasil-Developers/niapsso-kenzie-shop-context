import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const shopCart = localStorage.getItem("@shopCart: KenzieShop");
    return shopCart ? JSON.parse(shopCart) : [];
  });
  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(cart));
  };
  const removeFromCart = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    setCart(cart.filter((_, i) => i !== index));
    localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(cart));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
