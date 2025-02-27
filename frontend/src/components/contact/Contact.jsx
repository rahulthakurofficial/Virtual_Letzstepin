import { useRef, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const variants = {
    initial: { y: 500, opacity: 0 },
    animate: { 
        y: 0, opacity: 1, 
        transition: { duration: 0.5, staggerChildren: 0.1 }
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const jsonData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:5000/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jsonData),
            });

            if (!response.ok) throw new Error("Failed to send message.");

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                setError(null);
                formRef.current.reset();
            } else {
                setError(data.error || "Message sending failed.");
            }
        } catch (err) {
            setError(err.message || "Something went wrong!");
        }
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Connect</motion.h1>
                <motion.div className="item" variants={variants}><h2>Mail</h2><span>grow@letzstepin.com</span></motion.div>
                <motion.div className="item" variants={variants}><h2>Address</h2><span>Pune</span></motion.div>
                <motion.div className="item" variants={variants}><h2>Phone</h2><span>8761928727</span></motion.div>
            </motion.div>

            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="formGroup">
                        <input type="text" name="from_name" required placeholder="Name" />
                        <input type="email" name="email" required placeholder="Email" />
                        <input type="text" name="city" placeholder="City" />
                        <input type="text" name="business" placeholder="Business" />
                        <input type="number" name="contactNo" placeholder="Contact No." min="0" />
                        <input type="number" name="contactNo" placeholder="Contact No." min="0" />
                        
                    </div>git 
                    <div className="messageGroup">
                        <textarea name="message" rows={8} required placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                    {error && <p className="error"> {error}</p>}
                    {success && <p className="success"> Message sent successfully!</p>}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;