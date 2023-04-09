function addDiscountKey(products) {
  products.forEach(
    (el) =>
      (el.getDiscount = function () {
        const self = this;
        const PRODUCT_PRICE = self.price;
        const PRODUCT_DISCOUNT_PRICE = self.discountPrice;
        return (
          ((PRODUCT_PRICE - PRODUCT_DISCOUNT_PRICE) / PRODUCT_PRICE) *
          100
        )
          .toFixed(2)
          .toString()
          .concat("%");
      })
  );
  return products;
}

const products = [
  {
    price: 25.99,
    discountPrice: 20.79,
    name: "Product 1",
    rating: 4.5,
    created_date: "2022-01-01",
  },
  {
    price: 59.99,
    discountPrice: 44.99,
    name: "Product 2",
    rating: 3.8,
    created_date: "2021-11-15",
  },
  {
    price: 12.49,
    discountPrice: 10.99,
    name: "Product 3",
    rating: 4.2,
    created_date: "2022-02-20",
  },
  {
    price: 34.99,
    discountPrice: 27.99,
    name: "Product 4",
    rating: 4.8,
    created_date: "2021-12-10",
  },
];

console.log(addDiscountKey(products)[0].getDiscount());
