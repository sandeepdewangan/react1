import { useState } from "react";

export default function Form({ onAddItems }) {
  const [title, setTitle] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    // No reloading of page
    e.preventDefault();

    // return if there is no input
    if (!title) return;

    const newItem = {
      id: Date.now(),
      title: title,
      qty: qty,
      isPacked: false,
    };

    // add item
    onAddItems(newItem);

    // reset the state
    setTitle("");
    setQty(1);
  }

  return (
    <>
      <h2>What do you need for your trip 🏖?</h2>
      <form onSubmit={handleSubmit}>
        <select value={qty} onChange={(e) => setQty(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </>
  );
}
