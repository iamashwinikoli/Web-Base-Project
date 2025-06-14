import Navbar from "../components/Navbar";
import "./allpages.css"; // Import shared styles

function Graduation() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h1>Graduation Details</h1>
        <p>Hello, Here is an overview of my educational background:</p>

        <div
          style={{ marginTop: "1.5rem", fontSize: "1.1rem", lineHeight: "1.8" }}
        >
          <p>
            🎓 <strong>Bachelor’s Degree:</strong> Bachelor of Science(Computer
            Science), CGPA 5.20SVS's Dadasaheb Rawal College,Dondaicha, Dhule
            North Maharastra University , Jalgaon July 2017-June 2020
          </p>
          <p>
            🏛️ <strong>College:</strong> Completed from a recognized institution
          </p>

          <p>
            📚 <strong>Master’s Degree (Pursuing):</strong>I am currently
            pursuing a Master of Science (M.Sc.CA) in Computer Application CGPA
            9.09, at Modern College of Arts, Commerce and Science, Pune.I have
            completed one year of the program with First Class With Distinction,
            and I am now in the final year of my studies.
          </p>
          <p>
            🏫 <strong>Institute:</strong> Modern College of Arts, Science and
            Commerce Pune, Maharashtra
          </p>
        </div>
      </div>
    </>
  );
}

export default Graduation;
