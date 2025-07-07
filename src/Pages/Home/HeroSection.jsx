import { socialLinks } from "../../data/data";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="hero--section--title">
            <span>
              Hi, I'm <span className="name">Rahul Krishna</span>
            </span>
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Front-end
              <br />
              Developer
            </span>
          </h1>
          <p className="hero--section-description">
            Enthusiastic about creating dynamic and interactive web applications
            and experiences.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>

          {/* <a href="./img/resume.pdf" download="Resume"> */}
          <a
            href="https://drive.google.com/drive/folders/1MEqItw_nEuDKUa-_dx2ZSLUbHmtufN-z"
            download="Resume"
          >
            <button className="btn-primary">Download Resume</button>
          </a>
          <div className="hero--social--container">
            <div className="hero--social--icon">
              <ul>
                {socialLinks.map(({ href, svg }, idx) => (
                  <li key={href}>
                    <button
                      aria-label="Social Link"
                      className="navbar--content"
                      onClick={() =>
                        window.open(href, "_blank", "noopener,noreferrer")
                      }
                    >
                      {svg}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img
          className="profile--img"
          src="./img/hero_img-2.png"
          alt="Hero Section"
        />
      </div>
    </section>
  );
}
