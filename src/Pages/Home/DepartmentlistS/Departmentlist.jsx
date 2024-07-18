
import React from "react";
import "../HomeS/HomeT.css";
import { NavLink } from "react-router-dom";






const HomeT = () => {
  const departments = [
    "Computer Science",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Aeronautical Engineering",
    "Information Technology",
    "Electronics and Communication",
    "Medical Science",
    "Environmental Science",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Statistics",
    "Economics",
    "History",
    "Geography",
    "Political Science",
    "Psychology",
    "Sociology",
    "Philosophy",
    "Literature",
    "Linguistics",
    "Journalism",
    "Law",
    "Business Administration",
    "Education",
    "Nursing",
    "Pharmacy",
  ];
  
 
  
  return (
    <>
      <div className="main-container">
          
        <div className="inner-main-container">
          <div className="content-container">
            <h2>All departmet :</h2>
            <div className="department-list">
              {departments.map((department, index) => (
                <NavLink to="/Filter" className="department" key={index}>
                  <p >{department}</p>
                </NavLink>
              ))}
            </div>
          </div>
         
        </div>
      </div>

    </>
  );
};
export default HomeT;