import "./TabButton.css";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <>
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </>
  );
}
