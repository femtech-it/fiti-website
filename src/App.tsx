
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Homepage from "./pages/homepage"
import Footer from "./components/footer"

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
