const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connection OPEN");
  })
  .catch(err => {
    console.log("MONGO Connection FAILED");
    console.log(err);
  })

  const seedProducts = [
    {
        name: "Apple",
        price: 2.00,
        category: "fruit"
    },
    {
        name: "Banana",
        price: 1.00,
        category: "fruit"
    },
    {
        name: "Mango",
        price: 3.50,
        category: "fruit"
    },
    {
        name: "Carrot",
        price: 0.75,
        category: "vegetable"
    },
    {
        name: "Tomato",
        price: 1.20,
        category: "vegetable"
    },
    {
        name: "Milk",
        price: 2.50,
        category: "dairy"
    },
];

  Product.insertMany(seedProducts)
    .then( res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    })