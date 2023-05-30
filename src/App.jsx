
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Jsonplaceholder from "./pages/Jsonplaceholder"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="jsonplaceholder" element={<Jsonplaceholder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App