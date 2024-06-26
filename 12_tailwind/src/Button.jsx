function Button({ children }) {
  return (
    <button className="px-5 py-2 font-semibold bg-yellow-300 rounded-full">
      {children}
    </button>
  );
}

export default Button;
