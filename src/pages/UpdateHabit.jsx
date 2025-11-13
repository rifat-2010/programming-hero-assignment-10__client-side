import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const UpdateHabit = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const habit = data.result;
  // console.log(habit)
  const navigate = useNavigate();
  // for live instant update
  const [refetch, setRefecth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      imageUrl: e.target.thumbnail.value,
    };

    fetch(
      `https://programming-hero-assignment-10.vercel.app/habits/${habit._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/Habit_Details_page/${habit._id}`);
        // for live instant update
        setRefecth(!refetch);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        toast.error(err);
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

            {/* user current login Email */}
            <div>
              <label className="label font-medium">User Current Email</label>
              <input
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
                value={user.email || "No Email"} // default value
                readOnly // user can't change
              />
            </div>

            {/* user current login Name*/}
            <div>
              <label className="label font-medium">User Current Name</label>
              <input
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
                value={user.displayName || "No Name"} // default value
                readOnly // user can't change
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="common-btn w-full">
              Update Habit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHabit;
