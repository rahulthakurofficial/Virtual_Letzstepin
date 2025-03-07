import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
}


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Virtualise Your World</motion.h2>
                {/* <motion.h1 variants={textVariants}>Projects and Product Developements</motion.h1> */}
                <motion.h4 variants={textVariants}> Bring your imaginative world to vivid virtual life. Embark on virtual 
                opulence with India's foremost 360° tour & CGI expert, revitalizing your digital experience.</motion.h4>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See what we have done</motion.button>
                    <motion.button variants={textVariants}>Contact us</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
            </motion.div>
        </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                VIRTUAL REALITY
            </motion.div>
        <div className="imageContainer">
            <img src="/virtualImage.png" alt="" />
        </div>
    </div>
  )
}

export default Hero


