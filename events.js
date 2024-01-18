const eventEmitter = require("node:events");

const emitter = new eventEmitter();

emitter.on("order-pizza", (size, toppings) => {
  console.log(
    `Order received! Baking a ${size} pizza with ${toppings} toppings`
  );
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("This is a complementary pizza");
  }
});

console.log("Do work before event occurs in the system");

emitter.emit("order-pizza", "large", "mushrooms");
