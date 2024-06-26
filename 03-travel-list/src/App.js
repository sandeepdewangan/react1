import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Footer from "./components/Footer";
import PackingList from "./components/PackingList";

function App() {
  // state uplifted
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // we are not allowed to mutate state like this.
    // setItems(items => items.push(item));

    // solution is to create a brand new array with old items
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleItemPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onItemPacked={handleItemPacked}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
