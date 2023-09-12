import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import {Day1} from "./components/Day1";
import Footer from "./components/Footer";
import Header from "./components/Header";

const componentList = [
  {
    component: Day1,
    name: "🚀 Navigating the Digital Universe with React Router 🌌",
  },
  // Add more components here if needed
];

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-10 col-md-8 mx-auto">
              <h1 className="fw-light">
                🚀Starting React Library Learning Challenge🚀
              </h1>
              <p className="lead text-body-secondary mt-2">
                Hello everyone! 👋 Welcome to the React Library Learning
                Challenge, a 30-day journey to enhance your React skills by
                exploring a diverse range of React libraries and packages. 🚀
              </p>
            </div>
          </div>
        </section>
        {componentList.map(({ component: Component, name }, index) => (
          <div className="album bg-body-tertiary mb-5" key={index}>
            <div className="container">
              <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                  <p className="d-flex align-items-center link-body-emphasis text-decoration-none mb-3">
                    <span className="fs-4">
                      Day {index + 1}: {name}
                    </span>
                  </p>
                  <main className="px-3">
                    <Component />
                  </main>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
