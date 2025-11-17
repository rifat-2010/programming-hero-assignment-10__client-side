import React from "react";
import Banner from "../components/Banner";
import HomeBanner from "../components/home_Components/HomeBanner";
import BuildHabit from "../components/home_Components/BuildHabit";
import WorkSection from "../components/home_Components/WorkSection";
import HomeFinalSection from "../components/home_Components/HomeFinalSection";
import BetterFocus from "../components/home_Components/BetterFocus";
import ReducedSection from "../components/home_Components/ReducedSection";
import { useLoaderData } from "react-router";
import HabitCard from "../components/HabitCard";

const Home = () => {

  const data = useLoaderData();
  // console.log(data); 


  return (
    <div className="min-h-screen bg-background">
      <Banner></Banner>

      {/* Hero Banner / Slider */}
      <HomeBanner></HomeBanner>

      {/* Featured Habits Section */}
      <section data-aos="fade-up" className="py-24 px-4 bg-linear-to-b from-white to-purple-50">
        {/* title bar */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-purple-600 font-medium">
                ✨ Latest Additions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Habits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover popular habits that are transforming lives around the
              world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*Latest_Habit Cards */}
            {data.map((habit) => (
              <div
                key={habit._id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <HabitCard habit={habit} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build Habits Section */}
      <BuildHabit></BuildHabit>

      {/* How It Works Section */}
      <WorkSection></WorkSection>

      {/* Better Focus Section */}
      <BetterFocus></BetterFocus>

      {/* Reduced Stress Section */}
      <ReducedSection></ReducedSection>

      {/* Final CTA Section */}
      <HomeFinalSection></HomeFinalSection>
    </div>
  );
};

export default Home;
