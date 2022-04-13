import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bgImage from "./assets/images/tech_bg.png";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="" >
      <Navigation ></Navigation>
      <div>
      <About></About>
      <Contact></Contact>
      </div>            
      <Footer></Footer>
            
    </div>
  );
}

export default App;
