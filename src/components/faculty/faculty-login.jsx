import React, { useState } from "react";
import '../faculty/faculty-login.css';

function FacultyLogin() {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleMarksSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting marks for a subject
    console.log("Marks for Subject:", subject, marks);
  };

  return (
    <>
      <div className="faculty-login-container">
        <div className="faculty-login">
          <h2>Faculty Login</h2>
          <form onSubmit={handleMarksSubmit}>
            <select
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            >
              <option value="">Select Subject</option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
            </select>
            <input
              type="text"
              placeholder="Enter Marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
            <button type="submit">Submit Marks</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FacultyLogin;
