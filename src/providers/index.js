import { ShopProvider } from "./shop";
import { CartProvider } from "./cart";
import { ThemeProvider } from "./theme";

const Providers = ({ children }) => (
  <ShopProvider>
    <CartProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CartProvider>
  </ShopProvider>
);

export default Providers;
