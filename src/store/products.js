const products = [
  {
    id: 1,
    name: "Hamburguesa",
    types: [
      {
        name: "Sencilla",
        price: 5000,
        topins: [
          { name: "cebolla" },
          { name: "jitomate" },
          { name: "chiles" },
          { name: "lechuga" },
          { name: "jamón" },
          { name: "queso amarillo" },
          { name: "crema" },
          { name: "catsup" },
          { name: "mostaza" },
        ],
        specials: [
          { name: "Sin cebolla" },
          { name: "Sin jitomate" },
          { name: "Sin lechuga" },
        ],
        extras: [
          { name: "Queso Oaxaca", price: 1000 },
          { name: "Tocino extra", price: 500 },
        ],
      },
      {
        name: "Hawaiana",
        price: 6000,
        topins: [
          { name: "salchicha" },
          { name: "tocino" },
          { name: "piña" },
          { name: "cebolla" },
          { name: "jitomate" },
          { name: "chiles" },
          { name: "lechuga" },
          { name: "jamón" },
          { name: "queso amarillo" },
          { name: "crema" },
          { name: "catsup" },
          { name: "mostaza" },
        ],
        specials: [
          { name: "Sin cebolla" },
          { name: "Sin jitomate" },
          { name: "Sin lechuga" },
        ],
        extras: [
          { name: "Queso Oaxaca", price: 1000 },
          { name: "Tocino extra", price: 500 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Hot Dog",
    types: [
      {
        name: "Sencillo",
        price: 1800,
        topins: [
          { name: "cebolla" },
          { name: "jitomate" },
          { name: "chiles" },
          { name: "crema" },
          { name: "catsup" },
          { name: "mostaza" },
        ],
        specials: [{ name: "Sin cebolla" }, { name: "Sin jitomate" }],
        extras: [
          { name: "Queso Oaxaca", price: 1000 },
          { name: "Tocino extra", price: 500 },
        ],
      },
      {
        name: "Con queso",
        price: 2800,
        topins: [
          { name: "queso Oaxaca" },
          { name: "cebolla" },
          { name: "jitomate" },
          { name: "chiles" },
          { name: "lechuga" },
          { name: "jamón" },
          { name: "queso amarillo" },
          { name: "crema" },
          { name: "catsup" },
          { name: "mostaza" },
          { name: "piña" },
          { name: "salchicha" },
          { name: "tocino" },
        ],
        specials: [
          { name: "Sin cebolla" },
          { name: "Sin jitomate" },
          { name: "Sin lechuga" },
        ],
        extras: [
          { name: "Queso Oaxaca", price: 1000 },
          { name: "Tocino extra", price: 500 },
        ],
      },
    ],
  },
];

export function find(id) {
  return products.find((product) => product.id === id);
}

export default products;
