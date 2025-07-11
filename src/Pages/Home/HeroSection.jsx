import { socialLinks } from "../../data/data";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <FadeIn className="hero--section--content--box" delay={0.2}>
        <div className="hero--section--content">
          <FadeIn className="hero--section--title"delay={0.4}>
            <p>
              <span>
                Hi, I'm <span className="name">Rahul Krishna</span>
              </span>
            </p>
          </FadeIn>
          <FadeIn className="hero--section--title" delay={0.6}>
            <h1>
              <span className="hero--section-title--color">
                Front-end
                <br />
                Developer
              </span>
            </h1>
          </FadeIn>
          <FadeIn className="hero--section-description"delay={0.8}>
            <p>
              Enthusiastic about creating dynamic and interactive web
              applications and experiences.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <a
              href="https://drive.google.com/drive/folders/1MEqItw_nEuDKUa-_dx2ZSLUbHmtufN-z"
              download="Resume"
            >
              <button className="btn-primary">Download Resume</button>
            </a>
          </FadeIn>

          <FadeIn className="hero--social--container" delay={1}>
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
          </FadeIn>
        </div>
      </FadeIn>
      <FadeIn className="hero--section--img" delay={1}>
        <img
          className="profile--img"
          src="./img/new-crop.png"
          alt="Hero Section"
        />
      </FadeIn>
    </section>
  );
}
