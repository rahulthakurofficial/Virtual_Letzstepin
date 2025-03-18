import { useState, useEffect, useRef } from "react";
import "./Project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "360° Digital Staging",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/ZuMBjCE83Xo/e?hidelive=true&initvars.autorotate.enabled=true",
    desc: "Whether it’s a residential home, commercial property, or hospitality space, our advanced 360° digital staging technology allows you to visualize a fully furnished environment before any physical changes take place. Tailored to your design preferences and market trends, this immersive experience enhances property appeal, accelerates sales, and maximizes investment potential.",
  },
  {
    id: 2,
    title: "360° Digital Renovation",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/ZuIBjCE-2w4/e?initvars.autorotate.enabled=true&intro_mouse_icon=false&lead_gen=true",
    desc: "Experience the future of interior design with our exclusive 360° Digital Transformation service. We digitally rejuvenate walls, floors, and ceilings, bringing new life to residential and commercial spaces. Whether it’s a complete overhaul or a refined upgrade, our cutting-edge CGI technology allows you to visualize your property’s full potential before it even comes to life.",
  },
  {
    id: 3,
    title: "Digital Full 360° CGI VR Tour",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/Zy8BjDUWHCg/e?initvars.autorotate.enabled=true&intro_mouse_icon=false&lead_gen=true&share_button=false",
    desc: "Step into the future of real estate with our cutting-edge 360° CGI technology. We transform non-existent spaces into breathtakingly realistic experiences, captivating clients with immersive, interactive walkthroughs. Say goodbye to expensive show homes and static models—our seamless, device-friendly virtual tours are accessible anytime, anywhere.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <iframe
              src={item.src}
              width="100%"
              height="500px"
              style={{
                border: "2px solid white",
                borderRadius: "15px",
                overflow: "hidden",
              }}
              allowFullScreen
            ></iframe>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      {/* <div className="progress">
        <h1>Tailored Services for Virtual Properties</h1>
        {!isMobile && <motion.div style={{ scaleX }} className="progressBar"></motion.div>}
      </div> */}
      <div
        className="progress"
        style={{ width: "100%", background: "#0c0c1d", zIndex: 1000 }}
      >
        <h1>Tailored Services for Virtual Properties</h1>
        {!isMobile && (
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        )}
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
