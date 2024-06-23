export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="hero--section--title">
            Hi, <br />
            <span className="name">I'm Rahul Krishna</span>
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

          <a href="./img/resume.pdf" download="Resume">
            <button className="btn btn-primary download">
              Download Resume
            </button>
          </a>
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
