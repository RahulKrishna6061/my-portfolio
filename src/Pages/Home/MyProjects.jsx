export default function MyProjects() {
  const projects = [
    {
      title: "Portfolio Website",
      url: "https://rahulkrishna-portfolio.netlify.app/",
    },
    {
      title: "Weather App",
      url: "https://rkriz-weather-app.netlify.app/",
    },
    {
      title: "Burger Delivery App",
      url: "https://tasty-burgers-burger-delivery-app.netlify.app/",
    },
  ];

  return (
    <section className="project--section" id="myProjects">
      <div className="project--container--card">
        <div className="project--title--wrapper">
          <h1 className="project--section--title">My Projects</h1>
        </div>
        <div className="project--section--container">
          <p className="project--section--description">
            A curated collection of projects that showcase my skills in frontend
            development. Each project highlights a specific area of
            expertise—from responsive UI design and component structuring to API
            integration and performance optimization. Click on a card to explore
            the live version or demo.
          </p>
          <div className="project--cards--wrapper">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project--card"
              >
                <div className="project--card--content">
                  <h3 className="project--card--title">{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
