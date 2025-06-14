import Navbar from "../components/Navbar";
import "./allpages.css";

function Skills() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>Skills</h1>
        <p>Hi, here’s a categorized list of my technical skills and tools:</p>

        <div
          style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.8" }}
        >
          <h3>🖥️ Frontend Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Responsive Design, Cross-Browser Compatibility</li>
          </ul>

          <h3>⚙️ Backend Development</h3>
          <ul>
            <li>Node.js, Express.js</li>
            <li>REST APIs</li>
          </ul>

          <h3>💻 Programming Languages</h3>
          <ul>
            <li>C++, Python, Ruby, Shell Scripting</li>
          </ul>

          <h3>🗄️ Databases</h3>
          <ul>
            <li>SQL, MySQL, MongoDB</li>
          </ul>

          <h3>🔧 Tools & Platforms</h3>
          <ul>
            <li>AWS, GNU/Linux, Microsoft Windows</li>
          </ul>

          <h3>🚀 DevOps & Frameworks</h3>
          <ul>
            <li>DevOps Practices</li>
            <li>GitHub, Jenkins, Docker, Kubernetes</li>
            <li>Popular Frameworks (e.g., ReactJs, ExpressJs, Bootstrap)</li>
          </ul>
        </div>
        <h3 style={{ marginTop: "2rem" }}>🛠️ Technical Skills</h3>
        <li>
          💡 Strong knowledge of <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, and web design principles
        </li>
        <li>
          🧩 Familiarity with frontend frameworks such as <strong>React</strong>{" "}
          and <strong>Vue.js</strong>
        </li>
        <li>
          📱 Experience with <strong>responsive design</strong> and{" "}
          <strong>cross-browser compatibility</strong>
        </li>
        <li>
          🧠 Strong <strong>problem-solving</strong> and{" "}
          <strong>analytical</strong> skills
        </li>
        <li>
          🔧 Experience with <strong>Git</strong> and{" "}
          <strong>version control systems</strong>
        </li>
      </div>
    </>
  );
}

export default Skills;
