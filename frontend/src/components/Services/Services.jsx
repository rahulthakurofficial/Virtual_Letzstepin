import './Services.scss';
import { motion } from 'framer-motion';

const variants = {
    initial: { x: 0, y: 50, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } }
};

const Services = () => {
    return (
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/vr.webp" alt="VR" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Customized Solutions:</motion.b> Transforming</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>Virtual </motion.b>Spaces into Reality</h1>
                    <button>What We do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                {[
                    {
                        title: "360° Digital Staging",
                        desc: "Whether it’s a residential home, commercial property, or hospitality space...",
                    },
                    {
                        title: "360° Digital Renovation",
                        desc: "Experience the future of interior design with our exclusive 360° Digital Transformation service...",
                    },
                    {
                        title: "Digital 360° CGI VR Tour",
                        desc: "Step into the future of real estate with our cutting-edge 360° CGI technology...",
                    }
                ].map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="box"
                        whileHover={{ backgroundColor: "lightgray", color: "black" }}
                    >
                        <h2>{service.title}</h2>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Services;
