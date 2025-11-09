import React from 'react';

const HomeBanner = () => {
    return (
        <div>
                 {/* Hero Banner / Slider */}
      <section className="relative h-[600px] overflow-hidden bg-linear-to-br from-primary/10 via-accent/5 to-background">
        <div className="absolute inset-0 flex">
          {/* Slide 1 */}
          <div className="min-w-full flex items-center justify-center px-4">
            <div className="max-w-4xl text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Build Better Habits,
                <br />
                Transform Your Life
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Start small, stay consistent, and watch as daily actions
                compound into extraordinary results
              </p>
              <div className="flex gap-4 justify-center">
                <div className="common-btn">
                  Get Started Free
                </div>
                <div className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold cursor-pointer hover:bg-accent transition">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Indicator Border */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-40 h-2 rounded-full bg-primary border border-primary"></div>
        </div>
      </section>
        </div>
    );
};

export default HomeBanner;