import Navbar from "../components/Navbar";
import "./allpages.css"; // Common styling

function Experience() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>Experience</h1>
        <p>
          Hello, Here’s a summary of my professional experience and technical
          skills:
        </p>

        <h3 style={{ marginTop: "1.5rem" }}>💼 Work Experience</h3>
        <ul
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            paddingLeft: "1.2rem",
          }}
        >
          <li>
            🚀 <strong>DevOps Engineer</strong> at <strong>Compozent</strong>
          </li>
          <li>
            🌐 <strong>Web Development Engineer</strong> at{" "}
            <strong>Codsoft</strong>
          </li>
          <li>
            🔐 <strong>DevOps Engineer</strong> at{" "}
            <strong>Redient Security</strong>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
