const products = [
  {
    id: 1,
    name: "Hamburguesas",
    types: [
      {
        name: "Sencilla",
        topins: ["Cebolla", "Jitomate", "Chiles", "Lechuga"],
      },
      {
        name: "Hawaiana",
        topins: ["Salchicha", "Tocino", "Piña", "Cebolla"],
      },
      {
        name: "Doble",
        topins: ["Doble Carne", "Doble Jamón", "Doble Queso", "Cebolla"],
      },
    ],
  },
  {
    id: 2,
    name: "Hot Dogs",
    types: [
      {
        name: "Sencillo",
        topins: ["Cebolla", "Jitomate", "Chiles", "Crema"],
      },
      {
        name: "Con Queso",
        topins: ["Queso Oaxaca", "Cebolla", "Jitomate", "Chiles"],
      },
    ],
  },
  {
    id: 3,
    name: "Papas",
    types: [
      {
        name: "Francesa",
      },
      {
        name: "Gajo",
      },
    ],
  },
];

export function find(id) {
  return products.find((product) => product.id === id);
}

export default products;
