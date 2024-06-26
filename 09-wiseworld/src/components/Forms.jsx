import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../context/CitiesContext";

function Forms() {
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  const { createCity } = useCities();
  const [isFetchingGeoLoc, setIsFetchingGeoLoc] = useState(false);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  // const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(null);

  const [date, setDate] = useState(new Date());

  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  async function handleSubmit(e) {
    e.preventDefault();

    if (!city || !date) return;

    const newCity = {
      cityName: city,
      country,
      emoji: "https://flagcdn.com/w40/in.png",
      notes,
      position: { lat, lng },
      date,
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchReverseGeoLocation() {
        setIsFetchingGeoLoc(true);
        setError(null);
        try {
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode) {
            throw new Error("Country Doesnot Exists!");
          }
          setCity(data.city);
          setCountry(data.countryName);
        } catch (e) {
          setError(e.message);
        } finally {
          setIsFetchingGeoLoc(false);
        }
      }
      fetchReverseGeoLocation();
    },
    [lat, lng]
  );
  if (error) return <h1> {error} </h1>;

  if (isFetchingGeoLoc) return "<h1>Data Loading...</h1>";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        <input
          type="text"
          placeholder="Notes about the trip"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            // go one step back to history
            navigate(-1);
          }}
        >
          Go Back
        </button>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Forms;
