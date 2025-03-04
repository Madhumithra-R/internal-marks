import React from 'react'
import '../home-page/home.css'
import collegLogo from '../../assets/ksrlogo.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  return (
    <>
      <header>
        <img src={collegLogo} alt="College Logo" />
        <div class="title">K S Rangasamy College of Technology</div>
        <nav></nav>
      </header>
      <main>
        <div class="container">
          <h1>Welcome to Internal Marks Generator</h1>

          <div class="responsive-grid">
            <div class="card">
              <h3>Student Portal</h3>
              <button class="button" onClick={() => navigate("/student-login")}>
                Go to Student Login
              </button>
            </div>
            <div class="card">
              <h3>Faculty Portal</h3>
              <button class="button" onClick={() => navigate("/faculty-login")}>
                Go to Faculty Login
              </button>
            </div>
            <div class="card">
              <h3>Class Advisor Portal</h3>
              <button class="button" onClick={() => navigate("/advisor")}>
                Go to Class Advisor
              </button>
            </div>
            <div class="card">
              <h3>HOD Portal</h3>
              <button class="button" onClick={() => navigate("/hod")}>
                Go to HOD Dashboard
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>&copy; 2025 KSRCT. All Rights Reserved.</footer>
    </>
  );
}

export default Home ; 