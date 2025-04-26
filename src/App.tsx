import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WorkExperience from "./components/work-section";

function App() {
  return (
    <div>
      <Navbar />
      <hr className="border-gray-300" />
      <Hero />
      <hr className="my-10 border-gray-300" />
      <WorkExperience />
      <hr className="my-10 border-gray-300" />
    </div>
  );
}

export default App;
