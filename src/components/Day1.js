// Step 1: Install the necessary packages
// Run the following commands in your project directory:
// npm install react react-dom react-router-dom

import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

// Step 2: Create components for your pages
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is where your journey begins.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are explorers of the digital universe.</p>
    </div>
  );
};
// Step 3: Create your  Day1 component
export const Day1 = () => (
  <Router>
    {/* Route Configuration */}
    <Routes>
      {/* Define routes */}
      <Route exact path="/day1/" element={<Home />} />
      <Route exact path="/day1/about" element={<About />} />

      {/* Handle 404 (Not Found) */}
      <Route render={() => <h2>404: Page not found</h2>} />
    </Routes>
    <div>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/day1/">Home</Link>
          </li>
          <li>
            <Link to="/day1/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </Router>
);
// Step 4: Render your Day1 component
