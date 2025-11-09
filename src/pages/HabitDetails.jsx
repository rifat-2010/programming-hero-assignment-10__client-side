import React from 'react';
// import { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";




const HabitDetails = () => {

    const data = useLoaderData();
    const habit = data.result;
    console.log(habit)


    return (
        <div>
              <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={habit.imageUrl}
              alt={habit.title}
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {habit.title}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
                {habit.category}
              </div>

              <div className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
                CurrentStreak : {habit.currentStreak}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {habit.description}
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                // to={`/update-model/${model._id}`}
                className="common-btn"
              >
                Update Model
              </Link>
              <button
                // onClick={handleDownload}
                className="px-4  border border-border text-foreground rounded-lg font-semibold cursor-pointer hover:bg-accent transition"
              >
                Download
              </button>
              <button
                // onClick={handleDlete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600 mt-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default HabitDetails;