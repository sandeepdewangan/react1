import "./Pizza.css";

export default function Pizza(props) {
  return (
    // Setting CSS classes conditionally
    <div className={`pizza ${props.pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img
        src={props.pizzaObject.photoName}
        alt="4 Cheese Pizza"
        height="120px"
      />
      <div className="pizza-description">
        <p className="pizza-title">{props.pizzaObject.name}</p>
        <p>{props.pizzaObject.ingredients}</p>
        {!props.pizzaObject.soldOut ? (
          <p>{props.pizzaObject.price}</p>
        ) : (
          <p>SOLD OUT</p>
        )}
      </div>
    </div>
  );
}
