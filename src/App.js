import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
