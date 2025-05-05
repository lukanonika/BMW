
import { BrowserRouter } from "react-router-dom";
import Hero from  "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";


const App = () => {
    return (
       
    <BrowserRouter  >
    <div className="min-h-screen bg-white">
     <Navbar />
     <Hero />
     </div>
    </BrowserRouter>
    
    );
}

export default App;