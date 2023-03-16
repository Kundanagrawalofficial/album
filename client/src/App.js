import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.js";
import About from './pages/About.js';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from "./components/Auth/Register.js";
import Login from "./components/Auth/Login.js";

function App() {
  return (
    < >
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
      
    </>
  );
}

export default App;
