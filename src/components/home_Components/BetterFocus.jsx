import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";

const BetterFocus = () => {
  return (
    <div>
      <section className="py-24 px-4 bg-[#F4F7FE] relative overflow-hidden">
        {/* Animated background elements */}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 font-medium">
                🎯 Enhance Your Focus
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Better Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build habits that enhance concentration and mental clarity for
              peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
                <div className="bg-white rounded-3xl p-12 shadow-xl relative">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/010/870/647/non_2x/time-to-health-mind-work-meditation-body-man-achievement-person-exercise-focus-harmony-wellbeing-yoga-flat-illustration-concept-business-office-relax-balance-training-workout-zen-pose-vector.jpg"
                    alt="Focus illustration"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <FaRegEye className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Enhanced Concentration
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Develop deep work habits that help you enter flow states
                      and maintain laser-sharp focus for extended periods
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <FaBoltLightning className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Mental Clarity
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clear mental fog through consistent practices like
                      meditation, journaling, and strategic breaks
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <SiGoogleanalytics className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Improved Productivity
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Accomplish more in less time by building habits that
                      eliminate distractions and optimize your workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BetterFocus;
