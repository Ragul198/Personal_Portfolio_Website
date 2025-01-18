import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faHippo} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



function Navbar (){



    return(
     <>
   <div className=" h-20 bg-gray-900 text-white border-b border-slate-800 sticky top-0 z-10 scroll-smooth">
      <header className=" w-full flex justify-between items-center p-5 ">
        <h1 className="text-5xl font-bold hover:text-teal-400 "><FontAwesomeIcon icon={faHippo} /></h1>
        <nav>
          <ul className="flex space-x-8">
            
            <li><Link to="/" className="hover:text-teal-400 text-lg font-regular transition delay-50 duration-300 ease-out">About Me</Link></li>
            <li><Link to="/skills" className="hover:text-teal-400 text-lg font-regular transition delay-50 duration-300 ease-out">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400 text-lg font-regular transition delay-50 duration-300 ease-out">Projects</Link></li>
            <li><Link to="/workexperience" className="hover:text-teal-400 text-lg font-regular transition delay-50 duration-300 ease-out">Work Experience</Link></li>
            
          </ul>
        </nav>
      </header>

     
    </div>
     
    
    </>
  )
}
export default Navbar;