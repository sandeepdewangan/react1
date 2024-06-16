import { useSelector } from "react-redux";

function Customer() {
  // get the reducer
  const customer = useSelector((store) => store.customer);
  return (
    <div>
      <h1>Welcome {customer.fullName}</h1>
    </div>
  );
}

export default Customer;
