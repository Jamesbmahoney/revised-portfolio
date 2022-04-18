import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bgImage from "./assets/images/tech_bg.png";
import Navigation from "./components/Navigation";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import About from "./components/About";
import Portfolio from"./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navigation ></Navigation>      
      <div style={{ backgroundImage: `url(${bgImage})` }}>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>                
      <Footer></Footer> 
      </div>           
    </div>
  );
}

export default App;
