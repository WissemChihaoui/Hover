import Home from './comp/Home/Home';
import './App.scss';
import About from './comp/About/About';
import Team from './comp/Team/Team';
import Services from './comp/Services/Services';
import Project from './comp/Projects/Project';
import Contact from './comp/Contact/Contact';
import Footer from './comp/Footer/Footer';

function App() {
  return (
    <div className="app">
     <Home />
     <About />
     <Team />
     <Services />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
