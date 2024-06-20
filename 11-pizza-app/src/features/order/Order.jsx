import { useLoaderData } from "react-router-dom";

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;

  return (
    <div>
      <h1>
        {id} - {status}
      </h1>
      <p>{priority}</p>
      <p>{priorityPrice}</p>
      <p>{orderPrice}</p>
      <p>{estimatedDelivery}</p>
      {/* <p>{cart}</p> */}
    </div>
  );
}

export default Order;
