export default function Footer({ items }) {
  // Derived from state
  const itemCount = items.length;
  const itemPackedCount = items.filter((item) => item.isPacked).length;

  return (
    <>
      <h3>
        You have {itemCount} items on the list, and you already packed{" "}
        {itemPackedCount} items.
      </h3>
    </>
  );
}
