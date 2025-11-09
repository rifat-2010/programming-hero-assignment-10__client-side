import React from 'react';

const AddHabit = () => {
    return (
        <div>
        {/* Habit Cards */}
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="h-48 bg-linear-to-br from-blue-500/20 to-blue-600/20"></div>
            <div className="p-6 space-y-3">
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                Health & Fitness
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Morning Workout
              </h3>
              <p className="text-muted-foreground">
                Start your day with 30 minutes of exercise to boost energy and
                mood
              </p>
              <div className="pt-2">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-center cursor-pointer hover:opacity-90 transition">
                  View Habit
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AddHabit;