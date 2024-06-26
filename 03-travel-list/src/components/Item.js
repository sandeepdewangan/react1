export default function Item({ item, onDeleteItem, onItemPacked }) {
  return (
    <li className={item.isPacked ? "packed" : ""}>
      <input
        type="checkbox"
        value={item.isPacked}
        onClick={() => onItemPacked(item.id)}
      />
      {item.qty} {item.title}
      <button className="cross-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
