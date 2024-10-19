import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-container">
          {/* About Text */}
          <div className="about-text">
            <h1>About Me</h1>
            <h2>I'm <span className="highlight">Jone Lee</span>, a passionate <span className="profession">Developer</span>.</h2>
            <p className="description">
              I have been working in the software industry for over X years. My passion for development started when...
              [Expand with more about your journey, your skills, achievements, etc.]
            </p>
            <p className="description">
              My areas of expertise include full-stack development, animations, and building seamless user experiences. I'm constantly learning and adapting to new technologies to deliver top-notch results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
