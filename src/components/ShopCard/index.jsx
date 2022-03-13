import { numberFormatter } from "../../utils";
import Button from "../Button";
import { Wrapper } from "./styles";
import { useCart } from "../../providers/cart";

const ShopCard = ({ item }) => {
  const { addToCart } = useCart();
  return (
    <Wrapper>
      <div className="img-container">
        <img alt={item.name} src={item.img} />
      </div>
      <h2>{item.name}</h2>
      <span>{item.description}</span>
      <div className="buy-container">
        <span>{numberFormatter(item.value)}</span>
        <Button onClick={() => addToCart(item)} type="button">
          Comprar
        </Button>
      </div>
    </Wrapper>
  );
};

export default ShopCard;
