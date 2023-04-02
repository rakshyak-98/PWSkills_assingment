function filterByCategory(products){
    return function(category){
        return products.filter((product) => product.category == category)
    }
}
const products = [
  { name: "Shirt", price: 20.99, category: "Clothing" },
  { name: "Jeans", price: 35.99, category: "Clothing" },
  { name: "Socks", price: 5.99, category: "Accessories" },
  { name: "Belt", price: 15.99, category: "Accessories" },
  { name: "Sneakers", price: 79.99, category: "Footwear" },
  { name: "Sandals", price: 29.99, category: "Footwear" }
];

const clothingProducts = filterByCategory(products)("Accessories")
console.log(clothingProducts)