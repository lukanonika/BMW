import Bmwlogo from "../images/bmwlogo.png";
import '../index.css';

import  menu  from "../images/burger.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [toggle, setToggle] = useState(false); 
  return (
    

   <nav 
   className={` w-full flex items-center py-3 fixed top top-0 z-20  justify-between bg-[rgba(1,2,31,0.8)]`}
 >
   
  <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    <div className=" flex items-center gap-2 "> 
   <img  src={Bmwlogo} className=" m-1 w-18 h-18 object-contain" />
   <p className="text-white text-[50px]
          font-bold cartitle  flex">BMW</p>
   </div>

  




   <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
              
          />

            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } p-6 bg-[rgba(1,2,31,0.95)] absolute top-20 right-5 my-2 min-w-[140px] z-10 rounded-xl`}
            >


            <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              } font-poppins font-medium 
              cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
            </ul>
          </div>
         </div>
      </div>



      
</nav>







    

    
  )
}

export default Navbar
