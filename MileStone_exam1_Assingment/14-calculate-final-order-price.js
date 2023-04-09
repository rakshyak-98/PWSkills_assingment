const cart = [
  {
    name: "Spaghetti Bolognese",
    unitePrice: 10.99,
    quantity: 2,
    rating: 4.5,
  },
  {
    name: "Chicken Tikka Masala",
    unitePrice: 12.99,
    quantity: 1,
    rating: 4.8,
  },
  {
    name: "Caesar Salad",
    unitePrice: 8.99,
    quantity: 3,
    rating: 4.2,
  },
  {
    name: "Pepperoni Pizza",
    unitePrice: 14.99,
    quantity: 2,
    rating: 4.6,
  },
  {
    name: "Fish and Chips",
    unitePrice: 11.99,
    quantity: 1,
    rating: 4.4,
  },
];

function finalOrder(finalCart) {
  finalCart.forEach(
    (el) =>
      (el.getTotal = function () {
        return this.unitePrice * this.quantity;
      })
  );
  return finalCart;
}

console.log(finalOrder(cart));
