import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__made-by">Made by Elv</p>
        <div className="footer__links">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="#"
            className="footer__link footer__link--disabled"
            title="Coming soon!"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
        <p className="footer__year">&copy; {currentYear}</p>
        <p className="footer__credit">
          Icons by{" "}
          <a
            href="https://fontawesome.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            FontAwesome
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
