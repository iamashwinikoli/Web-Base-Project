import Navbar from "../components/Navbar";
import "./allpages.css"; // Reuse existing styling

function Contact() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>Contact Me</h1>
        <p>Welcome, Here’s how you can reach me:</p>

        <div
          style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.8" }}
        >
          <p>
            📧 <strong>Email:</strong> ashwinikoli918@gmail.com
          </p>
          <p>
            📱 <strong>Phone:</strong> +91-9325479375
          </p>
          <p>
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://iamashwinikoli.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              https://iamashwinikoli.github.io/
            </a>
          </p>
          <p>
            📍 <strong>Location:</strong> Pune, India
          </p>
          <p>
            💼 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/iamashwinikoli"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/iamashwinikoli
            </a>
          </p>
          <p>
            🐙 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/iamashwinikoli"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ashwinikoli
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
