import React from "react";

const BuildHabit = () => {
  return (
    <div>
      <section className="py-24 px-4 bg-linear-to-bl from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 font-medium">
                💪 Build Your Future
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Build Habits?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Small consistent actions lead to remarkable transformations over
              time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-linear-to-tr from-blue-600 to-indigo-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/?size=128&id=52550&format=png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Compound Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                1% better each day leads to 37x improvement in a year
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-linear-to-tr from-purple-600 to-pink-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/?size=128&id=PZlBgZ6X9dEb&format=png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Consistency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build lasting change through daily repetition and dedication
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-linear-to-tr from-green-600 to-teal-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=34&format=png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Save Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automate good behaviors and free mental energy for creativity
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-linear-to-tr from-amber-600 to-orange-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src="https://img.icons8.com/?size=160&id=114072&format=png"
                      alt=""
                      className="h-10 w-10"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Science-backed strategies used by top performers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildHabit;
