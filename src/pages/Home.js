import Navbar from "../components/Navbar";
import "./allpages.css"; // Shared styling

function Home() {
  return (
    <>
      <Navbar />
      <div className="section-container" style={{ textAlign: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/ashwinikoli.jpg`} // Make sure the image is in your /public folder
          alt="Profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Hello, <span style={{ color: "#1e90ff" }}>I'm Ashwini Koli </span>!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          I'm currently pursuing{" "}
          <strong style={{ color: "#0a7d62" }}>
            Master of Computer Application (MCA)
          </strong>
        </p>
      </div>
    </>
  );
}

export default Home;
