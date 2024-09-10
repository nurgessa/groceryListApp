import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddGroceryItem from "./AddGroceryItem";

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      history.push("/login");
    }
    const storedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
    setItems(storedItems);
  }, [history]);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem("groceryItems", JSON.stringify(newItems));
  };

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <AddGroceryItem addItem={addItem} />
    </div>
  );
};

export default GroceryList;
