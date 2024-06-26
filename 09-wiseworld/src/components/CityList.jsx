import { useCities } from "../context/CitiesContext";
import City from "./City";

function CityList() {
  // STEP 03: Consuming provider
  const { cities, isLoading } = useCities();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <hr />
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
