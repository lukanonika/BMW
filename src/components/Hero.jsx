import { motion } from "framer-motion";
import Carpage  from "./canvas/Carpage.jsx";
import Cards from "./canvas/Cards.jsx";
import '../index.css';


const Hero = () => {
    return (
        <motion.div>
        <div className="bg-[rgb(1,2,31)] pt-[10%] w-full h-screen justify-center items-center min-h-screen absolute  ">
            <header className=" z-10 text-center relative top-20 ">

                <h1 className="bmwh1">Luxury In Every Detail, <br></br>Power In Every Drive</h1>

             

            </header>
            <Carpage/>
        </div>
        
        <Cards></Cards>
        </motion.div>
    );
}

export default Hero;