import { Wrapper } from "./styles";
import Button from "../Button";
import { numberFormatter } from "../../utils";
import { useCart } from "../../providers/cart";

const CartInfos = () => {
  const { cart } = useCart();
  return (
    <Wrapper>
      <h3>Resumo do pedido</h3>
      <div>
        <span>
          {cart.reduce((acc, { quantidity }) => acc + quantidity, 0)} produtos
        </span>
        <span>
          {numberFormatter(
            cart.reduce((acc, { totalValue }) => acc + totalValue, 0)
          )}
        </span>
      </div>
      <Button>Finalizar pedido</Button>
    </Wrapper>
  );
};

export default CartInfos;
