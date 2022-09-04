import { Icon } from "@iconify/react";
import nasaIcon from "@iconify/icons-simple-icons/nasa";

const Header = () => {
  return (
    <header className="header">
      <h1> Natural Disaster Tracker </h1>
      <h5>
        Powered by <Icon icon={nasaIcon} style={{ fontSize: "3rem" }} />
      </h5>
    </header>
  );
};

export default Header;
