import { useState } from "react";
import menu from '../images/burger.png';     // your burger icon image
import close from '../images/X.png';   // your close icon image
import Bmwlogo from '../images/bmwlogo.png'; // your BMW logo

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex items-center py-3 fixed top-0 z-20 justify-between bg-[rgba(1,2,31,0.8)]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
       
        <div className="flex items-center gap-2">
          <img src={Bmwlogo} className="m-1 w-18 h-18 object-contain" />
          <p className="text-white text-[50px] font-bold cartitle flex">BMW</p>
        </div>

        
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-2xl cursor-pointer text-white font-sans">About</li>
          <li className="text-2xl cursor-pointer text-white font-sans">Home</li>
          <li className="text-2xl cursor-pointer text-white font-sans">Service</li>
          <li className="text-2xl cursor-pointer text-white font-sans">Company</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-[rgba(1,2,31,0.95)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                className={`${
                  active === "About" ? "text-white" : "text-gray-400"
                } font-sans font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive("About");
                }}
              >
                <a href="#about">About</a>
              </li>
              <li
                className={`${
                  active === "Home" ? "text-white" : "text-gray-400"
                } font-sans font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive("Home");
                }}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className={`${
                  active === "Service" ? "text-white" : "text-gray-400"
                } font-sans font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive("Service");
                }}
              >
                <a href="#service">Service</a>
              </li>
              <li
                className={`${
                  active === "Company" ? "text-white" : "text-gray-400"
                } font-sans font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive("Company");
                }}
              >
                <a href="#company">Company</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
