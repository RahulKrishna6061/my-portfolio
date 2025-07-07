import { Link } from "react-scroll";
import { navLinks, socialLinks } from "../../data/data";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--items">
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={to}
                  className="text-md"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            {socialLinks.map(({ href, svg }, idx) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  {svg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
