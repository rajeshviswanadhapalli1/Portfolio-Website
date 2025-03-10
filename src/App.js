import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import TechnicalSkills from './components/technicalskills';
import Contact from './components/contact';

function App() {
  return (
    <div>
    <Navbar />
    <main className="scroll-smooth">
      <Home />
      <About />
      <TechnicalSkills />
      <Contact />
    </main>
  </div>
  );
}

export default App;
