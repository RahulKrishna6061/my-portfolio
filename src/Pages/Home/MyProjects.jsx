import { projects } from "../../data/data";
import FadeIn from "./FadeIn";

export default function MyProjects() {
  return (
    <section className="project--section" id="myProjects">
      <div className="project--container--card">
        <FadeIn delay={0.1}>
          <div className="project--title--wrapper">
            <h1 className="project--section--title">My Projects</h1>
          </div>
        </FadeIn>

        <div className="project--section--container">
          <FadeIn delay={0.2} className="project--section--description">
            <p>
              A curated collection of projects that showcase my skills in
              frontend development. Each project highlights a specific area of
              expertise from responsive UI design and component structuring to
              API integration and performance optimization. Click on a card to
              explore the live version or demo.
            </p>
          </FadeIn>

          <div className="project--cards--wrapper">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="project--card--container">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project--card"
                >
                  <div className="project--card--content">
                    <h3 className="project--card--title secondary--title">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
