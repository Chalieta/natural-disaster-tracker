import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Map = ({ eventData, center, zoom }) => {
  function handleChange(id, name) {
    setSelection(id);
    setDisplayed(name);
  }

  const [selection, setSelection] = useState(8);

  const [displayed, setDisplayed] = useState("Wildfires");

  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === selection) {
      return selection !== 10 ? (
        <LocationMarker
          key={ev.id}
          id={selection}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
          }}
        />
      ) : (
        ev.geometries.map((stormLoc) => (
          <LocationMarker
            key={stormLoc.coordinates[1] + ", " + stormLoc.coordinates[0]}
            id={selection}
            lat={stormLoc.coordinates[1]}
            lng={stormLoc.coordinates[0]}
            onClick={() => {
              setLocationInfo({ id: ev.id, title: ev.title });
            }}
          />
        ))
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD6acxBS-zPtIjvKiZvs1xPOQtQE7jkf7Q" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      <DropdownButton
        variant="dark"
        id="dropdown-basic-button"
        title={displayed}
        style={{ position: "absolute", top: "15%", left: "50px" }}
      >
        <Dropdown.Item
          onClick={() => {
            setSelection(8);
            setDisplayed("Wildfires");
            setLocationInfo(false);
          }}
        >
          Wildfires
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(12);
            setDisplayed("Volcanoes");
            setLocationInfo(false);
          }}
        >
          Volcanoes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(9);
            setDisplayed("Floods");
            setLocationInfo(false);
          }}
        >
          Floods
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(10);
            setDisplayed("Severe storms");
            setLocationInfo(false);
          }}
        >
          Severe storms
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(6);
            setDisplayed("Drought");
            setLocationInfo(false);
          }}
        >
          Drought
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(16);
            setDisplayed("Earthquakes");
            setLocationInfo(false);
          }}
        >
          Earthquakes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSelection(14);
            setDisplayed("Landslides");
            setLocationInfo(false);
          }}
        >
          Landslides
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 32.813881,
    lng: -96.949928,
  },
  zoom: 6,
};

export default Map;
