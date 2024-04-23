import 'bootstrap/dist/css/bootstrap.min.css';
import './App.less';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { WorkWithMe } from './components/WorkWithMe';
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <About />
      <WorkWithMe />
      <Footer />
    </div>
  );
}

export default App;
