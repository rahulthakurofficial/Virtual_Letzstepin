// import "./App.scss";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/navbar/Navbar";
// import Project from "./components/Project/Project";
// import Services from "./components/Services/Services";
// import TwoD_Staging from "./components/TwoD_Staging/TwoD_Staging";

// const App = () => {
//   return (
//     <div>
//       <section id="Homepage">
//         <Navbar />
//         <Hero />
//       </section>
//       <section id="Services">
//         <Services />
//       </section>
//       <div id="Projects">
//         <Project />
//       </div>
//       <div id="TwoD_Staging">
//         <TwoD_Staging />
//       </div>
//       <section id="Contact">
//         <Contact />
//       </section>
//       <section id="Footer">
//         < Footer/>
//       </section>
//     </div>
//   );
// };

// export default App;



import { useEffect } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import TwoD_Staging from "./components/TwoD_Staging/TwoD_Staging";

const App = () => {
  // useEffect(() => {
    
  //   const disableRightClick = (event) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);

    
  //   const disableKeys = (event) => {
  //     if (
  //       event.ctrlKey &&
  //       ["u", "U", "s", "S", "i", "I", "j", "J"].includes(event.key)
  //     ) {
  //       event.preventDefault();
  //     }
  //     if (event.key === "F12") {
  //       event.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", disableKeys);

    
  //   const devToolsDetected = setInterval(() => {
  //     const devtools = /./;
  //     devtools.toString = function () {
  //       this.opened = true;
  //     };
  //     console.log("%c", devtools);
  //     if (devtools.opened) {
  //       window.location.href = "https://google.com";
  //     }
  //   }, 2000);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableKeys);
  //     clearInterval(devToolsDetected);
  //   };
  // }, []);

  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <div id="Projects">
        <Project />
      </div>
      <div id="TwoD_Staging">
        <TwoD_Staging />
      </div>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
