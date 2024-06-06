import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import React from "react"
import About from "./pages/About"
import Work from "./pages/Work"

const App: React.FC = () => {

  return (
    <div className="flex flex-col justify-between min-h-screen">
      
      <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App
