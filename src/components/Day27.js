import React, { useEffect, useState } from "react";
import firebase from "./firebase";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Reference to the 'students' collection in Firestore
    const studentsCollection = firebase.firestore().collection("students");

    // Fetch the data from Firestore
    studentsCollection.onSnapshot((snapshot) => {
      const studentData = [];
      snapshot.forEach((doc) => {
        studentData.push({ id: doc.id, ...doc.data() });
      });
      setStudents(studentData);
    });
  }, []);

  return (
    <div>
      <h3 className="mb-4">Student List</h3>
      <table className="table table-bordered w-50">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
