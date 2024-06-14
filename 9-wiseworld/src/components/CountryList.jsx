import { useCities } from "../context/CitiesContext";
import Country from "./Country";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <h1>Loading...</h1>;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country))
      return [
        ...acc,
        { id: city.id, country: city.country, emoji: city.emoji },
      ];
    else return acc;
  }, []);

  return (
    <div>
      <hr />
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
