import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ph%C3%BAc-ch%E1%BA%BF-873669167/"
        target="_black"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/chephuc" target="_black">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
