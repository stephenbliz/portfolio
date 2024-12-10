import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AboutMe from "./pages/AboutMe/aboutMe"
import HomePage from "./pages/Home/home"

import NotFound from "./pages/NotFound/notFound"
import Blog from "./pages/Blog/blog"
import ProjectDetail from "./pages/projectDetail/projectDetail"
import ContactPage from "./pages/ContactPage/contactPage"
import ProjectPage from "./pages/ProjectPage/projectPage"


function App() {

  return(
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project-detail/:slug" element={<ProjectDetail/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
