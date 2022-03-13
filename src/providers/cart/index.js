import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const shopCart = localStorage.getItem("@shopCart: KenzieShop");
    return shopCart ? JSON.parse(shopCart) : [];
  });
  const addToCart = (item) => {
    if (cart.length === 0 || !cart.find(({ id }) => id === item.id)) {
      item.quantidity = 1;
      item.totalValue = item.value;
      setCart([...cart, item]);
      localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(cart));
    } else {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          product.quantidity++;
          product.totalValue = product.quantidity * product.value;
        }
        return product;
      });
      setCart(newCart);
      localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(newCart));
    }
  };
  const removeFromCart = (item) => {
    const itemInCart = cart.find(({ id }) => id === item.id);
    if (itemInCart.quantidity > 1) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          product.quantidity--;
          product.totalValue = product.quantidity * product.value;
        }
        return product;
      });
      setCart(newCart);
      localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(newCart));
    } else {
      const index = cart.findIndex(({ id }) => id === item.id);
      const newCart = cart.filter((_, i) => i !== index);
      setCart(newCart);
      localStorage.setItem("@shopCart: KenzieShop", JSON.stringify(newCart));
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
