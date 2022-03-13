import { Wrapper } from "./styles";
import { useCart } from "../../providers/cart";
import { numberFormatter } from "../../utils";
import IconBtn from "../IconBtn";

const CartCard = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <Wrapper>
      <div className="img-container">
        <img alt={item.name} src={item.img} />
      </div>
      <h2>
        {item.name}
        <span className="item-quantidity">x{item.quantidity}</span>
      </h2>
      <span className="desc-span">{item.description}</span>
      <div className="buy-container">
        <span>{numberFormatter(item.totalValue)}</span>
        <div>
          <IconBtn mode="add" onClick={() => addToCart(item)}>
            Adicionar
          </IconBtn>
          <IconBtn mode="del" onClick={() => removeFromCart(item)}>
            Remover
          </IconBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartCard;
