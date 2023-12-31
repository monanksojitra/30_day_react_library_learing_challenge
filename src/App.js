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
import Day16 from "./components/Day16";
import Day17 from "./components/Day17";
import Day18 from "./components/Day18";
import Day19 from "./components/Day19";
import Day20 from "./components/Day20";
import Day21 from "./components/Day21";
import Day22 from "./components/Day22";
import Day23 from "./components/Day23";
import Day24 from "./components/Day24";
import Day25 from "./components/Day25";
import Day26 from "./components/Day26";
import Day27 from "./components/Day27";
import Day28 from "./components/Day28";
import Day29 from "./components/Day29";

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
  {
    component: Day16,
    name: "Unleash the Data Dragon with Axios! 🐉",
  },
  {
    component: Day17,
    name: " 🚀 Elevate Your Data Management Game with React Query! 🚀",
  },
  {
    component: Day18,
    name: "   ✨ Synchronize Your Data Seamlessly with SWR! ✨",
  },
  {
    component: Day19,
    name: " 📋 Craft Forms with Ease Using Formik! 📋",
  },
  {
    component: Day20,
    name: "  📜 Validate Forms Gracefully with Yup! 📜",
  },
  {
    component: Day21,
    name: "📊🎨 Mastering Data Visualization with Chart.js! 🎨📊",
  },
  {
    component: Day22,
    name: "Dive into the Art of Visualization with D3.js! 🎨",
  },
  {
    component: Day23,
    name: "Reinvent Your Charts with Recharts! 📊",
  },
  {
    component: Day24,
    name: "Achieve Victory with React Data Visualization! 🏆",
  },
  {
    component: Day25,
    name: "Zoom into Data with React-Vis! 🔍",
  },
  {
    component: Day26,
    name: "🌐 WebSocket: Real-Time Communication at Warp Speed!",
  },
  {
    component: Day27,
    name: "🔥 Firebase: Sparking Real-Time Data Sorcery! 🔮",
  },
  {
    component: Day28,
    name: "Unleash the Superhero of API Queries with GraphQL! ⚡",
  },
  {
    component: Day29,
    name: "Blast Off with React Query: Elevating Data Fetching to New Heights! 🚀",
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
