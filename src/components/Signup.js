import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    navigate("/home");
  };

  return (
    <div className="signup-container">
      <h2>Welcome to My Portfolio</h2>
      <p>
        Please sign up with your name to explore my complete portfolio. You'll
        be able to view my skills, experience, projects, education, and more!
      </p>

      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <button type="submit">View My Portfolio</button>
      </form>
    </div>
  );
}

export default Signup;
