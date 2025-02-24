import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP animation for background elements
    gsap.fromTo(
      ".bg-element",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d0d0d] min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-element w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Founded in <span className="text-blue-400 font-semibold">2021</span>, we are a dynamic <span className="text-purple-400 font-semibold">startup</span> driven by a passion for innovation. Our expertise spans across <span className="text-blue-400 font-semibold">branding</span>, <span className="text-blue-400 font-semibold">web development</span>, <span className="text-blue-400 font-semibold">UI/UX design</span>, <span className="text-blue-400 font-semibold">eCommerce solutions</span>, <span className="text-blue-400 font-semibold">motion graphics</span>, <span className="text-blue-400 font-semibold">mobile app development</span>, <span className="text-blue-400 font-semibold">software development</span>, and <span className="text-blue-400 font-semibold">digital marketing</span>. Our mission is to transform your vision into reality, creating impactful digital experiences that elevate your brand's presence in the digital landscape.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/services"
              className="block w-full text-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
