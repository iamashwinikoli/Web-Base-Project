import Navbar from "../components/Navbar";
import "./allpages.css"; // Optional if you're using a shared style

function About() {
  //const userName = localStorage.getItem("userName");

  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>About Me</h1>
        <p>Hello, welcome to the About section of my portfolio!</p>

        <div
          style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.8" }}
        >
          <p>
            I'm a passionate and dedicated software engineer with a strong
            interest in full-stack development and DevOps. I enjoy creating
            efficient, scalable, and user-friendly applications.
          </p>

          <p>
            I have hands-on experience working with modern web technologies such
            as <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>Express.js</strong>, and <strong>MongoDB</strong>. I'm also
            well-versed in version control tools like <strong>GitHub</strong>{" "}
            and cloud platforms such as <strong>AWS</strong>.
          </p>

          <p>
            In addition to my technical skills, I take pride in being a quick
            learner, problem solver, and team collaborator. I love exploring
            open-source projects and contributing to community learning.
          </p>

          <p>
            Currently, I’m pursuing my{" "}
            <strong>Master’s in Computer Application</strong> at{" "}
            <strong>
              Modern College of Arts, Science, and Commerce Pune, Maharashtra
            </strong>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
