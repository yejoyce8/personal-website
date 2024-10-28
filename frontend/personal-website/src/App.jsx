import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactMePage from "./pages/ContactMePage.jsx";
import * as React from "react";
import Main from "./pages/Main.jsx";
import DropDownMenu from "./components/DropDownMenu.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import StoryModePage from "./pages/StoryModePage.jsx";
import {AnimatePresence} from "framer-motion";
import WorkDetailsPage from "./pages/WorkDetailsPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <DropDownMenu/>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/aboutMe" element={<AboutMePage/>}/>
                    <Route path="/contactMe" element={<ContactMePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/work" element={<WorkPage/>}/>
                    <Route path="/work/:id" element={<WorkDetailsPage />}/>
                    <Route path="/storyMode" element={<StoryModePage/>}/>
              </Routes>
          </AnimatePresence>

      </BrowserRouter>
  )
}

export default App;
