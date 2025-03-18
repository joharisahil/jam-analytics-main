import { motion } from "framer-motion";
function Navbar() {
    return (


      
      <motion.nav
      initial={{ opacity: 0, y: -18}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container px-10 py-3 fixed top-2 left-96 transform -translate-x-1/2 mx-auto max-w-3xl z-40 flex items-center justify-between rounded-full bg-gray-300 p-4 text-white shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-300 text-transparent bg-clip-text">
        Jam Analytics
      </div>

      {/* Login Button with Hover Effect */}
      <button className="text-white px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md">
        Login
      </button>
    </motion.nav>
  );
}
  
  export default Navbar;