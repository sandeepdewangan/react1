import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onItemPacked }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "title")
    sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "qty")
    sortedItems = items.slice().sort((a, b) => Number(a.qty) - Number(b.qty));

  return (
    <>
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onItemPacked={onItemPacked}
        />
      ))}
      <hr />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input Order</option>
        <option value="title">Sort by Title</option>
        <option value="qty">Sort by Quantity</option>
      </select>
    </>
  );
}
