import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./styles.css";

const WorldMap = ({ countriesData }) => {
  const customMarker = L.icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div>
      {countriesData?.map((country, idx) => (
        <Marker
          icon={customMarker}
          key={idx}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
