import React from 'react';

const HomeFinalSection = () => {
    return (
        <div>
        <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of people building better habits every day
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <div className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold cursor-pointer text-white transition duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-[1.02]">
              Start Your Journey
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default HomeFinalSection;