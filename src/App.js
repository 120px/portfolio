import HeaderSection from "./components/HeaderSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import fileData from "./data.json"
import ContactSection from "./components/ContactSection";
import "./css/CSS_Main.css"
import AboutMeSection from "./components/AboutMeSection";

function App() {
  return (
    <div>
      <div className="container">

        <Navbar ></Navbar>
        <HeaderSection></HeaderSection>
      </div>

      <div className="container-fluid p-0">
        <ProjectSection></ProjectSection>
      </div>

      <AboutMeSection></AboutMeSection>

      <ContactSection></ContactSection>
      
    </div>
  );
}

export default App;
