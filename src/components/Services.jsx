import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Branding",
    description:
      "Crafting unique and memorable brand identities that resonate with your audience.",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to your business needs.",
    color: "from-green-500 to-teal-400",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences that enhance engagement and conversion.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategizing impactful digital campaigns that maximize your online presence.",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Motion Graphics",
    description:
      "Creating dynamic animations and video content that captivate your audience.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing custom mobile applications that drive user engagement and retention.",
    color: "from-purple-500 to-blue-400",
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
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
      className="bg-[#1a1a1a] min-h-screen flex flex-col items-center justify-center text-center px-6 py-12"
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our <span className="text-blue-400">Services</span>
      </motion.h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-r ${service.color} p-6 sm:p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {service.title}
            </h2>
            <p className="text-gray-200 text-sm sm:text-lg">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
