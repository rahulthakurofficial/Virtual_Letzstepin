import { useRef, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            from_name: formRef.current.from_name.value,
            email: formRef.current.email.value,
            city: formRef.current.city.value,
            business: formRef.current.business.value,
            contactNo: formRef.current.contactNo.value,
            message: formRef.current.message.value,
        };

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                setSuccess(true);
                setError(null);
                formRef.current.reset(); // Reset the form after successful submission
            } else {
                setError(data.error || "Failed to send message.");
            }
        } catch (err) {
            setError("Something went wrong!");
        }
    };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Connect</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>grow@letzstepin.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Pune</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>8761928727</span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="formGroup">
                        <input type="text" required placeholder="Name" name="from_name" />
                        <input type="email" required placeholder="Email" name="email" />
                        <input type="text" required placeholder="City" name="city" />
                        <input type="text" required placeholder="Business" name="business" />
                        <input type="number" required placeholder="Contact No." name="contactNo" />
                    </div>
                    <div className="messageGroup">
                        <textarea name="message" cols="8" rows={8} placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                    {error && <p className="error">Error: {error}</p>}
                    {success && <p className="success">Message sent successfully!</p>}
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;