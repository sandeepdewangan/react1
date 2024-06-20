// Fetching Data With React Router "Loaders"

import { getMenu } from "../apiRestaurants";

// Render as You Fetch.
export default async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
