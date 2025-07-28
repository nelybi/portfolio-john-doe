import "./Footer.css";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2025 John Doe. Tous droits réservés.</p>
        <div className="d-flex justify-content-center gap-3 fs-4 mb-2">
          <a
            href="https://github.com/github-john-doe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/john-doe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white"
          >
            <FaLinkedin />
          </a>
        </div>
        <Link to="/mentions" className="text-white text-decoration-underline">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
