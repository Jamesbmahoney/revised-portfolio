import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bgImage from "./assets/images/tech_bg.png";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <Navigation></Navigation>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
