import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WorkExperience from "./components/work-section";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <hr className="border-gray-300 mx-4" />
      <Hero />
      <hr className="my-10 border-gray-300 mx-4" />
      <WorkExperience />
    </div>
  );
}

export default App;
