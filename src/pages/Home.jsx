import React from "react";
import Banner from "../components/Banner";
import HomeBanner from "../components/home_Components/HomeBanner";
import BuildHabit from "../components/home_Components/BuildHabit";
import WorkSection from "../components/home_Components/WorkSection";
import HomeFinalSection from "../components/home_Components/HomeFinalSection";
import BetterFocus from "../components/home_Components/BetterFocus";
import ReducedSection from "../components/home_Components/ReducedSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner></Banner>


    {/* Hero Banner / Slider */}
        <HomeBanner></HomeBanner>

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
