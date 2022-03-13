import { Content, Wrapper } from "./styles";
import { useCart } from "../../providers/cart";
import CartCard from "../../components/CartCard";
import CartInfos from "../../components/CartInfos";

const Cart = () => {
  const { cart } = useCart();
  return (
    <Wrapper>
      <Content>
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </Content>
      <CartInfos />
    </Wrapper>
  );
};

export default Cart;
