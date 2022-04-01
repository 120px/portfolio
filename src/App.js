import HeaderSection from "./components/HeaderSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import fileData from "./data.json"
import ContactSection from "./components/ContactSection";


function App() {
  return (
    <div>

      <Navbar ></Navbar>
      <HeaderSection></HeaderSection>
      
      <ProjectSection></ProjectSection>

      <ContactSection></ContactSection>

    </div>
  );
}

export default App;
