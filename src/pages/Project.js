import Navbar from "../components/Navbar";
import "./allpages.css"; // Reuse styling

function Projects() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>Projects</h1>
        <p>
          Hi, here are some of my projects that demonstrate my skills and
          creativity:
        </p>

        <ul
          style={{
            marginTop: "1.5rem",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            paddingLeft: "1.2rem",
          }}
        >
          <li>
            🔍 <strong>Google Homepage Clone</strong> – Recreated Google’s
            homepage layout using HTML and CSS.
          </li>
          <li>
            🎬 <strong>Custom Video Player</strong> – A functional video player
            using HTML5, CSS, and JavaScript.
          </li>
          <li>
            💳 <strong>Online Bank Payment Form</strong> – A responsive and
            secure UI for online payments.
          </li>
          <li>
            🧑‍💼 <strong>Portfolio Website</strong> – A personal portfolio
            showcasing all skills and experiences (this project).
          </li>
          <li>
            🍔 <strong>Canteen Website</strong> – A mini food ordering system
            for a college canteen using HTML, CSS, JS.
          </li>
          <li>
            🏠 <strong>Rent Property App</strong> – A full-stack web application
            to list and search rental properties using Express.js, MySQL, and
            React.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
