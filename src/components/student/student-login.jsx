import React, { useState } from "react";
import '../student/student-login.css';
function StudentLogin({ role }) {
  const [regNo, setRegNo] = useState("");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling login submission
    console.log("Logging in as:", role, regNo, dept, year, subject);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login">
          <h2>Student Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Reg. No."
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
            <select onChange={(e) => setDept(e.target.value)} value={dept}>
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
            </select>
            <select onChange={(e) => setYear(e.target.value)} value={year}>
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
            </select>
            <select
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            >
              <option value="">Choose Subject</option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
            </select>
            <button type="submit">View</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
