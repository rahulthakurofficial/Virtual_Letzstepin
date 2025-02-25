import "./App.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import TwoD_Staging from "./components/TwoD_Staging/TwoD_Staging";

const App = () => {
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
        < Footer/>
      </section>
    </div>
  );
};

export default App;
