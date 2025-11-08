import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaBoltLightning } from 'react-icons/fa6';
import { SiGoogleanalytics } from 'react-icons/si';

const BetterFocus = () => {
    return (
        <div>
                 <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Better Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Build habits that enhance concentration and mental clarity for peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-12 h-96 flex items-center justify-center">
            <img src="https://img.icons8.com/?size=160&id=1AbMyprPgyuV&format=png" alt="" />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <FaRegEye />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced Concentration</h3>
                  <p className="text-muted-foreground">
                    Develop deep work habits that help you enter flow states and maintain laser-sharp focus for extended periods
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FaBoltLightning />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mental Clarity</h3>
                  <p className="text-muted-foreground">
                    Clear mental fog through consistent practices like meditation, journaling, and strategic breaks
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <SiGoogleanalytics />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Improved Productivity</h3>
                  <p className="text-muted-foreground">
                    Accomplish more in less time by building habits that eliminate distractions and optimize your workflow
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

export default BetterFocus;