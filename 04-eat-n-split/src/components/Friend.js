export default function Friend({
  name,
  description,
  imageURL,
  addSplitBillWithIntoSelect,
}) {
  return (
    <div className="friend">
      <img src={imageURL} className="fr-img" alt="Friend" />
      <div className="fr-description">
        <h3>{name}</h3>
        <h4 className="fr-p">{description}</h4>
      </div>
      <div className="fr-select">
        <button onClick={() => addSplitBillWithIntoSelect(name)}>Select</button>
      </div>
    </div>
  );
}
