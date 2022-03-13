import { Wrapper, Content } from "./styles";
import { useShop } from "../../providers/shop";
import ShopCard from "../../components/ShopCard";

const Home = () => {
  const { products } = useShop();
  return (
    <Wrapper>
      <Content>
        {products.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default Home;
