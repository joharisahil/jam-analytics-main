import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Jam Analytics
          <li>
             <a href="#Home">Home</a>
         </li>
         <li>
             <a href="#abc">Feature</a>
         </li>
         
        </div>
      </div>
    </nav>
  );
}
export default Navbar;