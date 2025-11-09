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

      {/* Featured Habits Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Habits
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover popular habits that are transforming lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {/* Habit Card 2 */}
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-gradient-to-br from-green-500/20 to-green-600/20"></div>
            <div className="p-6 space-y-3">
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                Mindfulness
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Daily Meditation
              </h3>
              <p className="text-muted-foreground">
                Practice mindfulness for 10 minutes to reduce stress and improve
                focus
              </p>
              <div className="pt-2">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-center cursor-pointer hover:opacity-90 transition">
                  View Habit
                </div>
              </div>
            </div>
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
