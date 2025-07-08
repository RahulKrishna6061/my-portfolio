import { skills } from "../../data/data";
import FadeIn from "./FadeIn";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <FadeIn delay={0.1}>
          <h1 className="skills--section--title">My Expertise</h1>
        </FadeIn>
      </div>

      <div className="skills--section--container">
        {skills?.map((item, index) => (
          <FadeIn key={index} delay={0.2 + index * 0.1}>
            <div className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--sub--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
