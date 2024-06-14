import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useEffect } from "react";

function CityDetails() {
  const { getCity, currentCity, isLoading } = useCities();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <>Page is Loading...</>;

  return (
    <div>
      {currentCity.id} City Details...
      <h2>{currentCity.cityName}</h2>
      <h2>{currentCity.country}</h2>
      <h2>{currentCity.date}</h2>
      <h2>Notes goes here...</h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default CityDetails;
