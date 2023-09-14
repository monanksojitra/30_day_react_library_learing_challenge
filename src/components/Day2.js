// Import necessary dependencies
import React from "react";
import {
  FaHome,
  FaCogs,
  FaMoneyBill,
  FaQuestion,
  FaInfo,
} from "react-icons/fa"; // Import icons from React Icons

// Define a functional component for the navigation bar
function Day2() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills gap-2">
          <li className="nav-item">
            <a
              href="#"
              className="btn btn-outline-primary active"
              aria-current="page"
            >
              <FaHome /> Home
            </a>
          </li>
          <li className="nav-item">
            <button href="#" className="btn btn-outline-dark">
              <FaCogs /> Features
            </button>
          </li>
          <li className="nav-item">
            <button href="#" className="btn btn-outline-dark">
              <FaMoneyBill /> Pricing
            </button>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-outline-dark">
              <FaQuestion /> FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-outline-dark">
              <FaInfo /> About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Day2;
