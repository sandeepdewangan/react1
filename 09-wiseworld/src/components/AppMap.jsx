// import { MapContainer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./AppMap.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { useUrlPosition } from "../hooks/useUrlPosition";

function AppMap() {
  //defualt pos
  const [mapPos, setMapPos] = useState([40, 10]);
  const { cities } = useCities();

  const [lat, lng] = useUrlPosition();
  // useNavigate to navigate to page programatically
  //const navigate = useNavigate();

  useEffect(
    function () {
      if (lat && lng) setMapPos([lat, lng]);
    },
    [lat, lng]
  );

  return (
    <div className={styles.div}>
      <MapContainer
        center={mapPos}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.cityName}, <img src={city.emoji} /> {city.country}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPos} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
// for every map operation we need to create custom components.
function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
// to change the center view point
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default AppMap;
