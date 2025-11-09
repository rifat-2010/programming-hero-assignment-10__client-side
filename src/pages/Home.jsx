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
  console.log(data);

  return (
    <div className="min-h-screen bg-background">
      <Banner></Banner>

      {/* Hero Banner / Slider */}
      <HomeBanner></HomeBanner>

      {/* Featured Habits Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        {/* title bar */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Habits
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover popular habits that are transforming lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*Latest_Habit Cards */}
          {data.map((habit) => (
            <HabitCard habit={habit} />
          ))}
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
