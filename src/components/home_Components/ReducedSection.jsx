import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
const ReducedSection = () => {
  return (
    <div>
      {/* Reduced Stress Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Reduced Stress
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Create calming routines that help you manage anxiety and maintain
              emotional balance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaRegHeart />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Lower Anxiety
                  </h3>
                  <p className="text-muted-foreground">
                    Build mindfulness and breathing habits that activate your
                    parasympathetic nervous system and calm your mind
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaRegSmile />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Emotional Balance
                  </h3>
                  <p className="text-muted-foreground">
                    Develop habits that help you process emotions healthily and
                    maintain stable mood throughout the day
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MdOutlineDarkMode />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Better Sleep Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Establish evening routines that reduce cortisol levels and
                    prepare your body for deep, restorative sleep
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div>
              <div className="bg-linear-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-12 h-96 flex items-center justify-center">
             <img src="https://img.icons8.com/?size=160&id=eau2PUp33l1c&format=png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReducedSection;
