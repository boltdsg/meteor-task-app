import React from "react";
import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <div
      id="header"
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        <Image src="https://galaxy-guide.meteor.com/images/logo-coralspace-left.svg" />
      </div>

      <h3>APP</h3>
    </div>
  );
};

export default Header;
