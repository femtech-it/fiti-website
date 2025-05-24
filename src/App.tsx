
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./pages/components/navbar"
import Homepage from "./pages/homepage"
import Footer from "./pages/components/footer"
import Resourcepage  from "./pages/resourcepage"
// import About from "./pages/about"
// import Contactus  from "./pages/contactus"
import CoursesPages  from "./pages/coursesPages"
// import Termspage from "./pages/termspage"
// import HireGraduate from "./pages/hireGraduate"
// import MeetGraduant from "./pages/meetGraduant"
import DisplayCourses from "./pages/displayCourses"



function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resources" element={<Resourcepage/>} />
        <Route path="/courses" element={<CoursesPages/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/about" element={<Contactus />} /> */}
        <Route path="/about" element={<DisplayCourses/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
