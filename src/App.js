import HeaderSection from "./components/HeaderSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import fileData from "./data.json"
import ContactSection from "./components/ContactSection";
import "./css/CSS_Main.css"
import AboutMeSection from "./components/AboutMeSection";
import { Outlet, Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LocalGrocer from "./components/Pages/LocalGrocer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="">

      <div className="container">
        <Navbar ></Navbar>
        <HeaderSection></HeaderSection>
      </div>

      <div className="container-fluid p-0">
        <ProjectSection ></ProjectSection>
      </div>

      <AboutMeSection></AboutMeSection>

      <ContactSection></ContactSection>
      {/* <Outlet /> */}

      {/* <Routes>
        <Route path="/" component={<App></App>}> </Route>
        <Route path="/localgrocer" element={<LocalGrocer/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
