import React from "react";

const WorkSection = () => {
  return (
    <div>
      <section className="py-24 px-4 bg-linear-to-tr from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <span className="text-indigo-600 font-medium">
                🎯 Simple Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to build lasting habits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-indigo-400 to-purple-400 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white transform -rotate-6 mb-6">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Choose Your Habit
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse our library or create a custom habit that aligns with
                    your personal goals and aspirations
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-400 to-indigo-400 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white transform -rotate-6 mb-6">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Track Daily Progress
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Log your habit completion and watch your streak grow day by
                    day with our intuitive tracking system
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl font-bold text-white transform -rotate-6 mb-6">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Celebrate Success
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Earn badges, view detailed insights, and share your
                    achievements with our supportive community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkSection;
