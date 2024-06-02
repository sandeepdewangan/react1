import Pizza from "./Pizza";

import "./Menu.css";

const pizzaData = [
  {
    name: "THE 4 CHEESE PIZZA",
    ingredients:
      "Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost",
    price: 300,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "MARGHERITA",
    ingredients:
      "A hugely popular margherita, with a deliciously tangy single cheese topping",
    price: 400,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "PEPPY PANEER",
    ingredients:
      "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
    price: 450,
    photoName: "pizzas/paneer.jpg",
    soldOut: false,
  },
  {
    name: "FARM HOUSE",
    ingredients:
      "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    price: 600,
    photoName: "pizzas/farmhouse.jpg",
    soldOut: false,
  },
  {
    name: "TANDOOR PARADISE",
    ingredients: "Goldern Corn, Black Olives, Capsicum & Red Paprika",
    price: 650,
    photoName: "pizzas/tandoor.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <p>
        Pizza and Only Pizza Co. Menu offers Delicious Speciality Pizzas. From
        our signature Pizzas to Pasta Pizzas. Explore our wide variety of
        Veg/Non-Veg Pizzas.
      </p>
      <div>
        {pizzaData.length > 0
          ? pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))
          : "Currently there is no Pizza in the menu."}
      </div>
    </>
  );
}
