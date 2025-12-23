
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner";
import Navbar from "./pages/components/navbar"
import Homepage from "./pages/homepage"
import Footer from "./pages/components/footer"
import Resourcepage from "./pages/resourcepage"
import CoursesPages from "./pages/coursesPages"
import AboutUsPage from "./pages/about"
import Termspage from "./pages/termspage"
import Contactus from "./pages/contactus"
import StudentProject from "./pages/studentProject"
import Photogallery from "./pages/photogallery"
import Registrationform from "./pages/registrationform"
import HireGraduate from "./pages/hireGraduate"
import MeetGraduant from "./pages/meetGraduant"
import Curriculum from "./pages/curriculuim"
import DisplayCourses from "./pages/displayCourses"



function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resources" element={<Resourcepage />} />
        <Route path="/courses" element={<CoursesPages />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/terms" element={<Termspage />} />
        <Route path="/contact/us" element={<Contactus />} />
        <Route path="/student/project" element={<StudentProject />} />
        <Route path="/gallery" element={<Photogallery />} />
        <Route path="/registration" element={<Registrationform />} />
        <Route path="/hire" element={<HireGraduate />} />
        <Route path="/graduants" element={<MeetGraduant />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/course/:id" element={<DisplayCourses />} />
      </Routes>
      <Toaster position="top-right" richColors />
      <Footer />
    </BrowserRouter>
  )
}

export default App
