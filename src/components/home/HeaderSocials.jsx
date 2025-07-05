import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/krishna120697"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/krishna-murari-chaudhary-771ba7298/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="mailto:krishnamission701@gmail.com"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
