import React from "react";

const HomeFinalSection = () => {
  return (
    <div>
      <section className="py-32 px-4 bg-linear-to-br from-purple-100 via-blue-100 to-white relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-medium">
              ✨ Begin Your Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Join thousands of people building better habits every day
          </p>
          <div className="pt-8">
            <button className="px-10 py-5 bg-linear-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFinalSection;
