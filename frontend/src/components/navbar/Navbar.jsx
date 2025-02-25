// import Sidebar from "../sidebar/Sidebar";
// import "./Navbar.scss";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <Sidebar />
//       <div className="navbar-wrapper">
//         {/* Animated Span */}
//         <motion.span 
//           initial={{ opacity: 0, scale: 0.5 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.5 }}
//         ></motion.span>

//         {/* Logo */}
//         <div className="navbar-logo">
//           <img src="/logoLetzstepin.png" alt="Logo" style={{ height: 'px', width: '130px' }} />
//         </div>

       

       
//         <div className="navbar-main-search">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             className="search-input"
//           />
//           <button className="search-btn">
//             <FaSearch className="icon" />
//           </button>
//         </div>
//         <div className="navbar-search-location">
//           <input 
//             type="text" 
//             placeholder="Search location..." 
//             className="search-input"
//           />
//           <button className="search-btn">
//             <FaMapMarkerAlt className="icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import LocationPermission from "../LocationPermission/LocationPermission";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="navbar-wrapper">
        {/* Animated Span */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        ></motion.span>
         <LocationPermission />

        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logoLetzstepin.png" alt="Logo" style={{ height: 'px', width: '130px' }} />
        </div>
        {/* <LocationPermission /> */}
      </div>
    </div>
  );
}

export default Navbar;
