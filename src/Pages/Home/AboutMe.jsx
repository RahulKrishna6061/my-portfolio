export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        {/* <div className="about--section--img--bg"> */}
        <img src="./img/about.png" alt="About Me" />
        {/* </div> */}
      </div>
      <div className="about--section--content--box">
        <div className="about--section--content">
          <h1 className="about-section--title">About Me</h1>
          <p className="about--section-description">
            I am a dedicated software engineer with over three years of
            experience specializing in frontend development using React.js,
            TypeScript, HTML, and CSS. I excel at designing and maintaining
            responsive web applications that deliver seamless performance across
            a wide range of devices. My focus on clean code, user-centric
            design, and modern best practices ensures scalable and maintainable
            solutions.
          </p>
          <p className="about--section-description">
            My recent experience includes modernizing legacy Angular
            applications to React for enterprise banking platforms—improving
            performance, maintainability, and developer efficiency. I’ve worked
            on complex projects involving user authentication, data
            visualization, and form validation while ensuring 100% accessibility
            compliance using tools like Axe DevTools and Axe Auditor. I’ve also
            improved code quality and stability by implementing unit tests with
            Jest and automating critical flows using TestCafe, significantly
            reducing post-deployment defects.
          </p>
          <p className="about--section-description">
            Beyond core frontend work, I have a working knowledge of Java and
            Spring Boot, which helps me collaborate effectively in full-stack
            environments. I am proficient with tools like Git, Postman, VS Code,
            Eclipse, and Jira, and I actively contribute to team code reviews
            and agile ceremonies. I’m now seeking opportunities to build on this
            foundation and contribute to innovative teams focused on
            high-quality user experiences and modern web architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
