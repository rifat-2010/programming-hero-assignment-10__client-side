import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <div>
      {/* Hero Banner / Slider */}
      <motion.section
        className="relative h-[600px] overflow-hidden bg-linear-to-br from-purple-100 via-blue-50 to-white"
       initial={{
            y: 200,
          }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
      >
        <div className="absolute inset-0 flex">
          {/* Slide 1 */}
          <div className="min-w-full flex items-center justify-center px-4">
            <div className="max-w-4xl text-center space-y-8 relative z-10">
              <div className="inline-block p-2 bg-purple-100 rounded-full mb-4">
                <span className="text-purple-600 font-semibold px-4">
                  ✨ Your Journey to Better Habits Starts Here
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Build Better Habits,
                <br />
                Transform Your Life
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Start small, stay consistent, and watch as daily actions
                compound into extraordinary results
              </p>
              <div className="flex gap-6 justify-center mt-8">
                <Link
                  to={"/Add_Habit"}
                  className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Get Started Free
                </Link>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeBanner;
