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
            Meticulous software engineer with two years of expertise in ReactJS,
            TypeScript, HTML, and CSS, looking to thrive in a dynamic role and
            contribute to innovative software design and development.
          </p>
          <p className="about--section-description">
            As an experienced front-end developer with two years of expertise in
            React.js, I excel at designing and implementing visually appealing,
            user-friendly web applications using React.js and SCSS. My strong
            problem-solving abilities and dedication to providing excellent user
            experiences drive my work.
          </p>
          <p className="about--section-description">
            I adhere to current best practices and web development concepts,
            ensuring high-quality results. Additionally, I possess basic
            knowledge of Java and Spring Boot, contributing to a well-rounded
            skill set.
          </p>
        </div>
      </div>
    </section>
  );
}
