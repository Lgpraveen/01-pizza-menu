import React from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza.CO</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza
            //   name={pizza.name}
            //   photoName={pizza.photoName}
            //   ingredients={pizza.ingredients}
            //   price={pizza.price}
            //   key={pizza.name}
            // />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are still working on menu. Please come back later</p>
      )}

      {/* <Pizza
        name="pizzas spinaci"
        ingredients={"Tomato, mozarella, spinach, and ricotta cheese"}
        photoName={"./pizzas/spinaci.jpg"}
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold-Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if(hour >=openHour && hour<=closeHour) alert("We are currently open");
  // else alert("Sorry, We are closed");

  return (
    // React.createElement("footer",null, "We are currently open")
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We are currently open 
      <button className="btn">Order Now</button> */}

      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>We are happy to invite you</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00 come visit us or order
        online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
