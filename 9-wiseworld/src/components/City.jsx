import { Link } from "react-router-dom";
import style from "./City.module.css";
import { useCities } from "../context/CitiesContext";

function City({ city }) {
  const { currentCity, deleteCity } = useCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(city.id);
  }

  return (
    <>
      <Link
        className={`${style.city} ${
          city.id === currentCity.id ? style["city-active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <div>
          <img src={city.emoji} width="8%" />
          {city.cityName},{city.country}
          <br />
          {city.date}
          <button onClick={handleDelete}>❌</button>
        </div>
      </Link>
    </>
  );
}

export default City;
