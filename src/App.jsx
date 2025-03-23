import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./components/Navbar/Navbar";
import StartupAthon from "./components/Startupathon/Startupathon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-primary text-white min-h-screen pt-20">
      <Navbar />
      <Banner />
      <StartupAthon />
    </div>
  );
}

export default App;
