import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import volcanoIcon from "@iconify/icons-fa6-solid/volcano";
import floodIcon from "@iconify/icons-fa6-solid/house-flood-water";
import stormIcon from "@iconify/icons-typcn/weather-stormy";
import droughtIcon from "@iconify/icons-carbon/drought";
import earthquakeIcon from "@iconify/icons-ri/earthquake-fill";
import landslideIcon from "@iconify/icons-ic/baseline-landslide";

const LocationMarker = ({ id, lat, lng, onClick }) => {
  const iconMap = {
    8: fireIcon,
    12: volcanoIcon,
    9: floodIcon,
    10: stormIcon,
    6: droughtIcon,
    16: earthquakeIcon,
    14: landslideIcon,
  };

  const classMap = {
    8: "fire-icon",
    12: "volcano-icon",
    9: "flood-icon",
    10: "storm-icon",
    6: "drought-icon",
    16: "earthquake-icon",
    14: "landslide-icon",
  };

  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={iconMap[id]} className={classMap[id]} />
    </div>
  );
};

export default LocationMarker;
