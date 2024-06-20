import { getOrder } from "../apiRestaurants";

// Render as You Fetch.
export default async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
