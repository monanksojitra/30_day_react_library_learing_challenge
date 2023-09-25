import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Day1 } from "./components/Day1";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Day2 from "./components/Day2";
import Day3 from "./components/DAy3";
import Day4 from "./components/Day4";
import Day6 from "./components/Day6";
import Day5_test from "./components/Day5_test";
import Day7 from "./components/Day7";
import Day8 from "./components/Day8";
import Day9 from "./components/Day9";
import Day10 from "./components/Day10";
import Day11 from "./components/Day11";
import Day12 from "./components/Day12";
import Day13 from "./components/Day13";
import Day14 from "./components/Day14";
import Day15 from "./components/Day15";

const componentList = [
  {
    component: Day1,
    name: "🚀 Navigating the Digital Universe with React Router 🌌",
  },
  {
    component: Day2,
    name: "🎨 Welcome to the World of React Icons! 🚀",
  },
  {
    component: Day3,
    name: "🎭🌟 Welcome to the grand theater of web development, where React Helmet takes center stage as the master costume designer! 🌟🎭",
  },
  {
    component: Day4,
    name: "🪄✨ Welcome to the enchanted world of React Bootstrap! 🪄✨",
  },
  {
    component: Day5_test,
    name: "🛡️ Welcome to the Realm of React Testing Library! 🛡️",
  },
  {
    component: Day6,
    name: "🎵 The React Redux Symphony: Achieving State Management Harmony 🎵",
  },
  {
    component: Day7,
    name: "🪄✨ Explore the Magical World of React Development with React Hookstate! 🪄✨",
  },
  {
    component: Day8,
    name: "🚀✨ Discover the Future of State Management with React Recoil! 🚀✨",
  },
  {
    component: Day9,
    name: "🪐⚡ Explore the React Universe with React Jotai: A Dynamic Force in State Management! ⚛️🪐",
  },
  {
    component: Day10,
    name: "🛡️⚔️ Harness the Power of React Rematch: Your Trusty Ally in State Management Battles! ⚛️🛡️",
  },
  {
    component: Day11,
    name: "🎨✨ Mastering Animation Magic with React Framer Motion! ✨🎨",
  },
  {
    component: Day12,
    name: "🎨🧰 Crafting Stunning Interfaces with Material-UI! 🧰🎨",
  },
  {
    component: Day13,
    name: "🎨🔮 Weaving Visual Enchantment with Styled-components! 🔮🎨",
  },
  {
    component: Day14,
    name: "🎨🏛️ Crafting Majestic Interfaces with Ant Design! 🏛️🎨",
  },
  {
    component: Day15,
    name: "🎨🛡️ Crafting Beautiful and Accessible UIs with Chakra UI! 🛡️🎨",
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
