import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { sendEmail } from "../components/Emailjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(e); // Assume sendEmail returns a promise
      toast.success("Message sent successfully!");
      formRef.current.reset(); // Clear the form after successful submission
    } catch (error) {
      toast.error("Error sending message, please try again.");
      console.error(error);
    }
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1a1a1a] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-around items-center mb-12">
          <motion.div
            className="flex items-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <FiPhone className="text-2xl text-blue-400 mr-4" />
            <span className="text-lg">+1 (234) 567-890</span>
          </motion.div>
          <motion.div
            className="flex items-center mb-6 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <FiMail className="text-2xl text-blue-400 mr-4" />
            <span className="text-lg">contact@yourcompany.com</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <FiMapPin className="text-2xl text-blue-400 mr-4" />
            <span className="text-lg">1234 Street Name, City, Country</span>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-4 bg-[#0d0d0d] border border-gray-700 rounded focus:outline-none focus:border-blue-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-4 bg-[#0d0d0d] border border-gray-700 rounded focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 bg-[#0d0d0d] border border-gray-700 rounded focus:outline-none focus:border-blue-400 mb-6"
            required
          ></textarea>
          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-400 text-white font-bold rounded hover:bg-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <ToastContainer position="bottom-right" autoClose={5000} />
      </div>
    </section>
  );
};

export default ContactUs;
