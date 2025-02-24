import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#0d0d0d] text-white py-12 px-6 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-[#1a1a1a] pointer-events-none"></div>
      <div className="container mx-auto relative z-10 text-center">
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Stay Connected
        </motion.h3>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Follow us on social media for the latest updates.
        </motion.p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-blue-500 text-2xl hover:text-blue-400 transition"
          >
            <FiFacebook />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-blue-400 text-2xl hover:text-blue-300 transition"
          >
            <FiTwitter />
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-pink-500 text-2xl hover:text-pink-400 transition"
          >
            <FiInstagram />
          </motion.a>
        </div>
        <motion.p
          className="mt-8 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
