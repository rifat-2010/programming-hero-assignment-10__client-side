import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { FaFire, FaUser, FaClock, FaEnvelope, FaCheck} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const HabitDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [habit, setHabit] = useState(data.result);

  // console.log(habit)

  // Calculate completion percentage (last 30 days)
  const completedDays = habit.completionHistory?.length || 0;
  const completionPercentage = Math.round((completedDays / 30) * 100);

const handleMarkComplete = (id) => {
  fetch(`http://localhost:3000/habits/${id}/complete`, {
    method: "PATCH",
  })
  .then(res => res.json())
  .then(data => {
    // console.log(data);

    if (data.message === "Already completed today") {
      toast.error("Already completed today!");
      return;
    }

    toast.success("Marked as completed!");

    setHabit(prev => ({
      ...prev,
      currentStreak: data.currentStreak,
      completionHistory: data.completionHistory
    }));
  });
};


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* User Profile Section */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-16 h-16 rounded-full border-4 border-white shadow-md"
              />
              <div className="text-white">
                <h2 className="text-xl font-semibold">{user.displayName}</h2>
                <div className="flex items-center space-x-2 text-blue-100 mt-1">
                  <FaEnvelope className="w-4 h-4" />
                  <span className="text-sm">{user.email}</span>
                </div>
                {user.emailVerified ? 
                  <div className="flex items-center space-x-1 text-green-300 mt-1">
                    <FaCheck className="w-4 h-4" />
                    <span className="text-xs">Verified Account</span>
                  </div>
                 : 
                <div className="flex items-center space-x-1 text-red-500 mt-1">
                    <ImCross className="w-4 h-4" />
                    <span className="text-xs">Not Verified Account</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        {/* Header Image */}
        <div className="relative h-64 w-full">
          <img
            src={habit.imageUrl}
            alt={habit.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Title and Category */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {habit.title}
            </h1>
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              {habit.category}
            </span>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress (Last 30 days)
              </span>
              <span className="text-sm font-medium text-gray-900">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Streak Badge */}
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
            <FaFire className="w-5 h-5 mr-2" />
            <span className="font-semibold">
               Streak badge : {habit.currentStreak} Days
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">{habit.description}</p>
          </div>

          {/* Creator Info */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <FaUser className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{habit.userName}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="w-4 h-4 mr-1" />
                  <span>Reminder: {habit.reminderTime}</span>
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              Created Date: {new Date(habit.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Action Button */}
          <button onClick={() => handleMarkComplete(habit._id)} className="px-10 py-5 bg-linear-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer w-full">
            MARK COMPLETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
