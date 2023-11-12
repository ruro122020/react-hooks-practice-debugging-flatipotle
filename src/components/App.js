/*
Deliverables:
1. A user should be able to see an order form with options for protein, fillings, toppings, and sides.
2. A user should be able to select as many proteins, fillings, toppings, and sides as they desire.
3. A user should be able to submit the form with their selections and see their order(s) listed under "All Orders."
4. If a user selects any sides, they should be able to click on a button to view their side choices.
 */
import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders(orders.concat(order));
  }

  const displayOrders = orders.map((order, idx) => {
    <Order key={idx} {...order} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">{displayOrders}</div>
      </div>
    </div>
  );
}

export default App;
