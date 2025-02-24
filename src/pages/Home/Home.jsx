import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import About from "../../components/About";
import Services from "../../components/Services";
import ContactUs from "../../components/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  const sphereContainer = useRef(null);

  useEffect(() => {
    // GSAP Floating Effect for 3D Spheres
    gsap.to(".sphere", {
      y: "random(-30, 30)",
      x: "random(-15, 15)",
      scale: "random(0.9, 1.1)",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
    });
  }, []);

  return (
    <>
    <section className="bg-[#0d0d0d] min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Fancy Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight text-white max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Elevating brands <br />
        in the <motion.span className="text-blue-400">digital era.</motion.span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-4 max-w-2xl px-4 pb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        From Branding to Digital Presence—We Bring Your Vision to Life!
      </motion.p>

      {/* CTA Buttons */}
      <motion.div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/contact"
            className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 shadow-xl"
          >
            Let’s Collaborate
          </Link>
        </motion.div>

    
      </motion.div>

      {/* Floating 3D Gradient Spheres */}
      <div ref={sphereContainer} className="absolute top-1/4 left-5 sm:left-10 flex flex-col space-y-4 sm:space-y-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl opacity-80 sphere"></div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-teal-400 to-green-500 rounded-full shadow-xl opacity-80 sphere"></div>
      </div>

      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 flex space-x-4 sm:space-x-6">
        <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl opacity-80 sphere"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-2xl opacity-80 sphere"></div>
      </div>
    </section>
    <About/>
    <Services/>
    <ContactUs/>
    <Footer/>
    </>
  );
};

export default Home;
