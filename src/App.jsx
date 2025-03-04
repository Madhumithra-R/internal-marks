import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home-page/home";
import StudentHome from "../src/components/student/student-home";
import FacultyLogin from "../src/components/faculty/faculty-login";
import StudentLogin from "../src/components/student/student-login";
import Advisor from "./components/advisor/advisor";
import Hod from "./components/hod/hod";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/faculty-login" element={<FacultyLogin />} />
      <Route path="/advisor" element={<Advisor />} />
      <Route path="/hod" element={<Hod />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
