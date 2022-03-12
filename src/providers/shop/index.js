import { createContext, useContext, useState } from "react";

const initialState = [
  {
    id: 1,
    name: "Cabrinha",
    description: "Cabra muito mancinha e amigável",
    img: "./assets/cabra.png",
    value: 37.99,
  },
  {
    id: 2,
    name: "Cavalinho",
    description: "Gosta muito de maçã e correr",
    img: "./assets/cavalo.png",
    value: 82.99,
  },
  {
    id: 3,
    name: "Uma galinha",
    description: "Galiña",
    img: "./assets/galinha.png",
    value: 1.99,
  },
  {
    id: 4,
    name: "Lhamazinha",
    description: "Linda lhama cospe muito",
    img: "./assets/lhama.png",
    value: 3.99,
  },
  {
    id: 5,
    name: "Mulinha",
    description: "Mula muito carinhosa e simpática",
    img: "./assets/mula.png",
    value: 53.99,
  },
  {
    id: 6,
    name: "Ovelhinha",
    description: "Ovelha muito legal de verdade, amigona",
    img: "./assets/ovelha.png",
    value: 493.99,
  },
  {
    id: 7,
    name: "Porquinho",
    description: "Porquinho louco",
    img: "./assets/porco.png",
    value: 132.99,
  },
  {
    id: 8,
    name: "Vaquinha",
    description: "Vaquinha muito simpática!!",
    img: "./assets/vaca.png",
    value: 212.99,
  },
  {
    id: 9,
    name: "Araquinídeo",
    description: "Oxiii aranhazinha muito fofinha",
    img: "./assets/aranha.png",
    value: 0.2,
  },
];

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState(initialState);
  return (
    <ShopContext.Provider value={{ products, setProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
