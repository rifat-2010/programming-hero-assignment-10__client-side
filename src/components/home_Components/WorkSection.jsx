import React from 'react';

const WorkSection = () => {
    return (
        <div>
              <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to build lasting habits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Choose Your Habit
                </h3>
                <p className="text-muted-foreground">
                  Browse our library or create a custom habit that aligns with
                  your goals
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Track Daily Progress
                </h3>
                <p className="text-muted-foreground">
                  Log your habit completion and watch your streak grow day by
                  day
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Celebrate Success
                </h3>
                <p className="text-muted-foreground">
                  Earn badges, view insights, and share your achievements with
                  the community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default WorkSection;