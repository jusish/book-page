import "./App.css";
import Hero from "./components/Hero";
import News from "./components/NewsCard";
import Recommended from "./components/Recommended";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <div className="justify-center text-center">
      <Hero />
      <TopSellers />
      <Recommended/>
      <News/>
    </div>
  );
}

export default App;
