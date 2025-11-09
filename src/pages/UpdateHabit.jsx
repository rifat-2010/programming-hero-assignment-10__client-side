import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateHabit = () => {
  const data = useLoaderData();
  const habit = data.result;
  // console.log(habit)
  const navigate = useNavigate();
  // for live instant update
  const [refetch, setRefecth] = useState(false);

  const handleSubmit = (e) => {
    navigate(`/Habit_Details_page/${habit._id}`);

    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      imageUrl: e.target.thumbnail.value,
    };

    fetch(`http://localhost:3000/habits/${habit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // for live instant update
        setRefecth(!refetch);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-10">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Your Habit
          </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={habit.title}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={habit.category}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Vehicles">Morning</option>
                <option value="Plants"> Work</option>
                <option value="Foods"> Fitness</option>
                <option value="Home & Living">Evening</option>
                <option value="Characters"> Study</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                defaultValue={habit.description}
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                defaultValue={habit.imageUrl}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="common-btn w-full">
              Add Habit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHabit;
