import { useTheme } from "../../providers/theme";
import { Wrapper } from "./styles";

const Header = () => {
  const { changeTheme } = useTheme();
  return (
    <Wrapper>
      <h1>Kenzie Shop</h1>
      <button onClick={changeTheme}>peidas</button>
    </Wrapper>
  );
};

export default Header;
