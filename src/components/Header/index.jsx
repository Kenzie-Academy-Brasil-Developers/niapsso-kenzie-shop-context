import { useTheme } from "../../providers/theme";
import ToggleSwitch from "../ToggleSwitch";
import { Wrapper } from "./styles";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import CartSize from "../CartSize";
import { useCart } from "../../providers/cart";

const Header = () => {
  const { theme, changeTheme } = useTheme();
  const { cart } = useCart();
  const history = useHistory();
  const { pathname } = history.location;
  const [buttonText, setButtonText] = useState(
    pathname === "/" ? "Carrinho" : "Home"
  );
  const handleDirection = () => {
    setButtonText(pathname === "/" ? "Home" : "Carrinho");
    return pathname === "/" ? history.push("/cart") : history.push("/");
  };
  return (
    <Wrapper>
      <h1>Kenzie Shop</h1>
      <div className="buttons-container">
        <div className="toggle-container">
          <IoMdSunny />
          <ToggleSwitch
            onChange={() => changeTheme()}
            checked={theme === "dark"}
          />
          <IoMdMoon />
        </div>
        <Button onClick={handleDirection}>{buttonText}</Button>
        <CartSize
          size={
            pathname === "/"
              ? cart.reduce((acc, el) => acc + el.quantidity, 0)
              : 0
          }
        />
      </div>
    </Wrapper>
  );
};

export default Header;
