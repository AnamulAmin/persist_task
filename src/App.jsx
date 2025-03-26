import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./components/Navbar/Navbar";
import StartupAthon from "./components/Startupathon/Startupathon";
import FoundIdea from "./components/FoundIdea/FoundIdea";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import GetIdea from "./components/GetIdea/GetIdea";
import StartupathonChallengers from "./components/StartupathonChallengers/StartupathonChallengers";
import EliteFounder from "./components/EliteFounder/EliteFounder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-primary text-white min-h-screen pt-20">
      <Navbar />
      <Banner />
      <StartupAthon />
      <FoundIdea />
      <VideoComponent
        // title="Startupathon"
        subTitle="Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A Startupathon Success)"
        src="https://www.youtube.com/embed/pn_HoowYNTQ?si=_fYytlh2DStWLdKE"
      />
      <VideoComponent
        // title="Startupathon"
        subTitle="Our Hiring Process: Shared Through Candidate Stories"
        src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=8231cada-ae3f-4a8b-b060-f0f07c62e5da"
      />
      <GetIdea />
      <StartupathonChallengers />
      <EliteFounder />
    </div>
  );
}

export default App;
