import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
const ReducedSection = () => {
  return (
    <div>
      {/* Reduced Stress Section */}
      <section className="py-24 px-4 bg-[#F6FEF9] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-600 font-medium">
                🌿 Peace of Mind
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Reduced Stress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create calming routines that help you manage anxiety and maintain
              emotional balance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Content Side */}
            <div className="space-y-8">
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                    <FaRegHeart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Lower Anxiety
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build mindfulness and breathing habits that activate your
                      parasympathetic nervous system and calm your mind
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                    <FaRegSmile className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Emotional Balance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Develop habits that help you process emotions healthily
                      and maintain stable mood throughout the day
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <MdOutlineDarkMode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Better Sleep Quality
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Establish evening routines that reduce cortisol levels and
                      prepare your body for deep, restorative sleep
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-teal-400 to-green-400 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                <div className="bg-white rounded-3xl p-12 shadow-xl relative">
                  <img
                    src="https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/ca/126/0395_637713903988333939.jpg"
                    alt="Stress reduction illustration"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReducedSection;
