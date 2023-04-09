const products = [
  {
    Name: "Apple iPhone 13",
    Category: "Electronics",
    Price: 999,
    Discount: true,
  },
  {
    Name: "Sony Playstation 5",
    Category: "Electronics",
    Price: 499,
    Discount: false,
  },
  {
    Name: "Nike Air Max 270",
    Category: "Shoes",
    Price: 150,
    Discount: true,
  },
  {
    Name: "Canon EOS R5",
    Category: "Electronics",
    Price: 3899,
    Discount: true,
  },
  {
    Name: "Nintendo Switch",
    Category: "Electronics",
    Price: 299,
    Discount: true,
  },
  {
    Name: "Samsung Galaxy S21",
    Category: "Electronics",
    Price: 799,
    Discount: false,
  },
  {
    Name: "Adidas Ultraboost",
    Category: "Shoes",
    Price: 180,
    Discount: false,
  },
  {
    Name: "Apple iPad Pro",
    Category: "Electronics",
    Price: 1099,
    Discount: true,
  },
  {
    Name: "LG OLED CX",
    Category: "Electronics",
    Price: 1899,
    Discount: true,
  },
  {
    Name: "Nike Air Force 1",
    Category: "Shoes",
    Price: 100,
    Discount: false,
  },
  {
    Name: "Nike Air Max 270",
    Category: "Shoes",
    Price: 150,
    Discount: true,
  },
  {
    Name: "Adidas Ultraboost",
    Category: "Shoes",
    Price: 180,
    Discount: false,
  },
  {
    Name: "Canon EOS R5",
    Category: "Electronics",
    Price: 3899,
    Discount: true,
  },
  {
    Name: "Nike Air Max 270",
    Category: "Shoes",
    Price: 150,
    Discount: true,
  },
  {
    Name: "Apple iPhone 13",
    Category: "Electronics",
    Price: 999,
    Discount: true,
  },
  {
    Name: "LG OLED CX",
    Category: "Electronics",
    Price: 1899,
    Discount: true,
  },
];

function removeDuplicateProduct(products) {
  const unique = products.filter(
    (element, index, arr) =>
      index === arr.findIndex((t) => t.Name === element.Name)
  );
  debugger;
  return unique;
}

console.log(removeDuplicateProduct(products));
